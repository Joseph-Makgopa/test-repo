import { isExpressionFactoryMetadata } from "@angular/compiler/src/render3/r3_factory";
import { IterableDiffers } from "@angular/core";
import { AppComponent } from "./app.component";

describe('AppComponent',()=>{
  let fixture:AppComponent;

  beforeEach(()=>{
      fixture = new AppComponent();
  })

  it("should have a title",()=>{
      expect(fixture.title).toEqual("ang-app")
  })
})