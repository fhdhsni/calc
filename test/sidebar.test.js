/* eslint-disable prefer-arrow-callback */
import { assert } from "chai";
import sidebar from "../src/scripts/sidebar";

describe("sidebar", function () {
  it("", function () {
    document.body.innerHTML = `
        <button class="convertor">convertor</button>
        <div class="bg"></div>
        <aside class="side-bar"></aside>`;
    this.bg = document.querySelector(".bg");
    this.sidebarEl = document.querySelector(".side-bar");
    this.convertor = document.querySelector(".convertor");

    sidebar.call(this);
    this.convertor.click();

    assert(this.sidebarEl.classList.contains("showup"),
           ".showup class should've been added");
    assert(this.bg.classList.contains("show"),
           ".show class should've been added");

    this.bg.click();

    assert.isFalse(this.sidebarEl.classList.contains("showup"),
                   ".showup class should've been removed");
    assert.isFalse(this.bg.classList.contains("show"),
                   ".show class should've been removed");
  });
});

