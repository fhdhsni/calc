/* eslint-disable no-param-reassign */
export default function () {
  function backspaceAtCursor(input) {
    // http://stackoverflow.com/a/1735554/2576218
    if (input.selectionStart) {
      /* From MDN
         selectionStart
         The index to the first character in the current selection. If
         there's no selection, this value is the index of the
         character following the position of the text entry cursor.

         selectionEnd
         The index to the last character in the current selection. If
         there's no selection, the value is the index of the character
         following the position of the text entry cursor.
      */
      const startPos = input.selectionStart;
      const endPos = input.selectionEnd;

      if (startPos === endPos) { // so there's not selection
        input.value = input.value.substring(0, startPos - 1) +
          input.value.substring(endPos, input.value.length);
        // from beginning to one before StartPos(or endPos) + from startPos(or endPos) to the end
        input.focus();
        input.setSelectionRange(startPos - 1, startPos - 1); // where to put the caret
      } else {
        input.value = input.value.substring(0, startPos) +
          input.value.substring(endPos, input.value.length);
        input.focus();
        input.setSelectionRange(startPos, startPos);
      }
    }
  }

  this.backspaceKey.addEventListener("click", () => {
    backspaceAtCursor(this.input);
  });
}
