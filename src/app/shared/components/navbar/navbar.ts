import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [MatIcon, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
