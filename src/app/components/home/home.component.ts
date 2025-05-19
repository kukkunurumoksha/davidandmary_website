import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurProgramsComponent } from './our-programs/our-programs.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, AboutUsComponent,
     OurProgramsComponent,
     WhyChooseUsComponent,
    CurriculumComponent,
    AdmissionComponent,
  ContactComponent,
FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
