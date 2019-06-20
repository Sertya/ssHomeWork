function dateFilter(date,format){
  let result = format;
    
  if(typeof date === 'string' && isNaN(Number(date))) {
    date = Date.parse(date);
  }
      
  if(!isNaN(Number(date))) {
    date = new Date(Number(date));
  }
      
  let yyyy = date.getUTCFullYear(),
    yy = String(yyyy).slice(2),
    M = date.getUTCMonth() + 1,
    MM = M < 10 ? `0${M}` : M,
    d = date.getUTCDate(),
    dd = d < 10 ? `0${d}` : d,
    H = date.getUTCHours(),
    HH = H < 10 ? `0${H}` : H,
    m = date.getUTCMinutes(),
    mm = m < 10 ? `0${m}` : m,
    s = date.getUTCSeconds(),
    ss = s < 10 ? `0${s}` : s;
      
    result = result.replace(/yyyy/g, yyyy)
      .replace(/yyyy/g, yy)
      .replace(/MM/g, MM)
      .replace(/M/g, M)
      .replace(/dd/g, dd)
      .replace(/d/g, d)
      .replace(/HH/g, HH)
      .replace(/H/g, H)
      .replace(/mm/g, m)
      .replace(/ss/g, ss)
      .replace(/s/g, s);
      
    return result;
  }
  
  console.log(dateFilter('2015', 'dd/MM/yyyy'));
  console.log(dateFilter(0, 'HH:mm'));
  console.log(dateFilter(new Date('1995-12-17T03:24:00'), 'd/M/yy H%m'));