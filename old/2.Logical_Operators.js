// 1.Логічний AND (&&)
//  Видає true тільки тоді, коли обидва операнди є true.

true && true;
true && false;
false && true;
false && false;

// 2.Логічний OR (||)
//  Видає true, якщо хоча б один з операндів є true.

true || true;
true || false;
false || true;
false || false;

// 3.Логічний NOT (!)
//  Перетворює операнд в логічне значення і повертає протилежне значення.

!true;
!false;

// 4.Оператор нульового злиття (??)
//  Повертає правий операнд, якщо лівий операнд null або undefined.

const name = null;
const defaultName = "guest";

const message = name ?? defaultName;
