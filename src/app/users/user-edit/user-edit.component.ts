import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import * as uuid from 'uuid';
import {User} from '../user.model';
import {AddUser, LoadUsers} from '../store/users.actions';
import {Store} from '@ngrx/store';
import {State} from '../store/user.reducers';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  id: string;
  private subscription: any;
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private store: Store<State>) {}
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );

    this.signupForm = new FormGroup({
      id: new FormControl(uuid.v4()),
      firstName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      birthDate: new FormControl('', Validators.required)
    });

    if (this.id) {
      this.userService.getUser(this.id).subscribe(
        user => {
          this.id = user.id;
          this.signupForm.patchValue({
            firstName: user.firstName,
            lastName: user.lastName,
            birthDate: user.birthDate,
          });
        }, error => {
          console.log(error);
        }
      );
    }
  }
  ngOnDestroy() {}

  onSubmit() {


    if (this.signupForm.valid) {
      if (this.id) {
        const user: User = new User(this.id,
          this.signupForm.controls['firstName'].value,
          this.signupForm.controls['lastName'].value,
          this.signupForm.controls['birthDate'].value);
        this.userService.updateUser(user).subscribe();
      } else {
        const user: User = new User(uuid.v4(),
          this.signupForm.controls['firstName'].value,
          this.signupForm.controls['lastName'].value,
          this.signupForm.controls['birthDate'].value);
        // this.userService.addUser(user).subscribe();
        this.store.dispatch(new AddUser(user));

      }
      this.signupForm.reset();
      this.onCancel();
    }
  }
  onCancel() {
    this.router.navigate(['/users']);
  }
}

