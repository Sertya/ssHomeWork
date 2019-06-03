function toUpperCase(str) {
  let result = '';

  for( let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    
    switch (true) {
      case code >= 97 && code <= 122:
      case code >= 1072 && code <= 1103:
        result += String.fromCharCode(code - 32);
        break;
      case code === 1105:
        result += String.fromCharCode(code - 80);
        break;
      default:
        result += str[i];
        break;
    }   
  }
 return result;
}

let alfabet = 'абвгдеёжзийклмнопрстуфхцчъыьэюя  !?/%& abcdefghijklmnopqrstuvwxyz';
console.log(toUpperCase(alfabet));

