# রিকার্শন

রিকার্শন একটি প্রোগ্রামিং টেকনিক। কোনো ফাংশন যখন নিজের ভিতর নিজেকে কল করে, সেই ফাংশনকে রিকার্সিভ ফাংশন এবং সেই টেকনিক'কে রিকার্শন বলে।

রিকার্সিভ ফাংশন যেহেতু বার বার নিজেকে কল করে, সেহেতু তাকে একটি বেইস কেইস দিতে হবে কারণ প্রতিটি ফাংশন কল স্ট্যাকে গিয়ে জমা হয় এবং সাধারণত স্ট্যাকের একটি নির্দিষ্ট সাইজ থাকে তা এক্সিড যেন না করাতে পারে।

আমরা যদি 1-5 পর্যন্ত যোগফল বের করতে চাই,

```js
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}

console.log(sum); // 15
```

আমরা চাইলে এই কাজটুকু রিকার্সিভ ফাংশন ব্যবহার করে করতে পারি।

```js
function generateSum(n) {
  if (n === 0) {
    // একে বেইস কেইস বলে
    return 0;
  }

  return n + generateSum(n - 1);
}

console.log(generateSum(5)); // 15
```

n = 5 হলে উপরের কোডটিকে সিমপ্লীফাই করলে দেখতে পারব,

```js
5 + generateSum(5 - 1);
5 + 4 + generateSum(4 - 1);
5 + 4 + 3 + generateSum(3 - 1);
5 + 4 + 3 + 2 + generateSum(2 - 1);
5 + 4 + 3 + 2 + 1 + generateSum(1 - 1); // n === 0
5 + 4 + 3 + 2 + 1 + 0; // বেইস কেইসে চলে এসেছি তাই স্ট্যাক থেকে ফ্রী হওয়া শুরু করবে এবং আউটপুট 5 + 4 + 3 + 2 + 1 + 0 = 15
```

একটি বহুল ব্যবহৃত উদাহরণ হল, কোনো সংখার ফ্যাক্টোরিয়াল বের করা।

```js
function getFactorial(num) {
  if (num === 1) return 1;

  return num * getFactorial(num - 1);
}

console.log(getFactorial(5)); // 120
```

n = 5 হলে উপরের কোডটিকে সিমপ্লীফাই করলে দেখতে পারব,

```js
5 * getFactorial(4);
5 * 4 * getFactorial(3);
5 * 4 * 3 * getFactorial(2);
5 * 4 * 3 * 2 * getFactorial(1); // n === 1
5 * 4 * 3 * 2 * 1; // বেইস কেইসে চলে এসেছি তাই স্ট্যাক থেকে ফ্রী হওয়া শুরু করবে এবং আউটপুট 5 * 4 * 3 * 2 = 120
```

ফাংশনের ভিতর ফাংশন কল হয়ে এরকম একটি স্ট্রাকচার তৈরি হচ্ছে,

```js
return 5 * function getFactorial(4) {
  return 4 *  function getFactorial(3) {
    return 3 *  function getFactorial(2) {
      return 2 * function getFactorial(1) {
        return 1; // এখানে স্ট্যাক পূর্ণ হয়েছে
      }
    }
  }
}
```

যেহেতু return 1 এ স্ট্যাক পূর্ণ হয়েছে, সেহেতু 1 রিটার্ণ করে তারপর LIFO(Last-in First-out) অনুযায়ী স্ট্যাক থেকে বাদ যাবে,

```js
return 5 * function getFactorial(4) {
  return 4 *  function getFactorial(3) {
    return 3 *  function getFactorial(2) {
      return 2 * 1; // 2
    }
  }
}

// পরের স্ট্রেপ LIFO(Last-in First-out) অনুযায়ী বাদ যাওয়ার পর

return 5 * function getFactorial(4) {
  return 4 *  function getFactorial(3) {
    return 3 * 2; // 6
  }
}

// পরের স্ট্রেপ LIFO(Last-in First-out) অনুযায়ী বাদ যাওয়ার পর

return 5 * function getFactorial(4) {
  return 4 * 6; // 24
}

// পরের স্ট্রেপ LIFO(Last-in First-out) অনুযায়ী বাদ যাওয়ার পর

return 5 * 24 // 120
```

রিকার্শন পদ্ধতি আমাদের অনেক সময় অনেক কাজ সহজ করে দেয়। ট্রি রিলেটেড প্রবলেমের জন্য এই পদ্ধতি বেশি ব্যবহার করা হয়।
