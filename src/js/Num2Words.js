export class Num2Words {
  constructor (input) {
    // console.log(input);
    this.input = input;
    this.ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    this.mid = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    this.tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; ;
    this.rest = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion'];
  }
  find () {
    var tex = '';
    if (Number(this.input) === 0) {
      tex = 'zero';
      return tex.trim();
    }
    if (this.input.length > 48) {
      tex = 'Out of Limit';
      return tex.trim();
    }
    var num = this.input;
    var j = 0;
    while (num.length > 0) {
      var ex = 0;
      if (num.length === 2) {
        ex = 1;
      }
      var last = num.substr(num.length - 3 + ex);
      tex = this.convert(last, j) + tex;
      num = num.substr(0, num.length - 3);
      j++;
    }
    return tex.trim();
  }
  convert (last, j) {
    var text = '';
    last = Number(last);
    while (last > 0) {
      if (last > 99) {
        var digit = Math.floor(last / 100);
        text += ' ' + this.ones[digit] + ' hundred';
        last = (last % 100);
      } else if (last >= 20 && last <= 99) {
        if (text !== '' && j === 0) {
          text += ' and';
        }
        digit = Math.floor(last / 10);
        text += ' ' + this.tens[digit];
        last = last % 10;
        text += ' ' + this.ones[last];
        last = 0;
      } else if (last < 20 && last > 10) {
        if (text !== '' && j === 0) {
          text += ' and';
        }
        text += ' ' + this.mid[last - 10];
        last = 0;
      } else {
        text += ' ' + this.ones[last];
        last = 0;
      }
    }
    if (text !== '') {
      text += ' ' + this.rest[j];
    }
    return text;
  }
}
