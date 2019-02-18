import { Component } from "@angular/core";

@Component({
  selector: "hs-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <hs-nav></hs-nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "fb-chat";
}
