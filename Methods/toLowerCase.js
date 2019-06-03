function toLowerCase(str) {
  let result = '';

  for( let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    
    switch (true) {
      case code >= 65 && code <= 90:
      case code >= 1040 && code <= 1071:
        result += String.fromCharCode(code + 32);
        break;
      case code === 1025:
        result += String.fromCharCode(code + 80);
        break;
      default:
        result += str[i];
        break;
    }   
  }
 return result;
}

let alfabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧЪЫЬЭЮЯ  !?/%& ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(toLowerCase(alfabet));
