import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-block",
  templateUrl: "./block.component.html",
  styleUrls: ["./block.component.css"]
})
export class BlockComponent implements OnInit {
  name: string = "Bob";
  imageSrc: string = "http://placekitten.com/200/300";
  constructor() {}
  ngOnInit(): void {
  }

  sayHello(): void {
    alert("Bonjour");
  }
}
