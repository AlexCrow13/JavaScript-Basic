let a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  Оператор ++а сначала выполняется, увеличивая а на 1, затем возвращает значение в с 
d = b++; alert(d);           // 1 Сначала возвращается значение в d (тк b === 1), затем выполняется b++ , увеличивая b на 1
c = (2+ ++a); alert(c);      // 5 Сначала выполняем ++a ( тк было a===2 , то станет a===3) и выполняем операцию сложения  +2 , затем возвращаем значение в с
d = (2+ b++); alert(d);      // 4 Сначала выполняем операцию сложения 2 + b ( где b===2), возвращаем результать в переменную d , после чего выполняем операцию b++ (было b===2 , станет b===3)
alert(a);                    // 3 Из операций выше a присвоит значение 3
alert(b);                    // 3 Из операций выше b присвоит значение 3