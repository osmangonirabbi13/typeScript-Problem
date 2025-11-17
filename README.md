## 1.What are some differences between interfaces and types in TypeScript?
##উত্তর :  TypeScript এ interface এবং type দুটোই আমরা অবজেক্ট ডিফাইন করতে ব্যবহার করি। তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

interface : একই নামের একাধিক interface একত্রে ব্যবহার করা যায়। মূলত অবজেক্টের স্ট্রাকচার ডিফাইন করার জন্য ব্যবহার হয়। extends এর মাধ্যমে অন্য interface থেকে properties ইনহেরিট করা যায়।

Type:  Type alias নতুন টাইপের নাম দিয়ে existing type বা combination টাইপ তৈরি করতে ব্যবহৃত হয়। Declaration merging সাপোর্ট করে না। Primitive, union, intersection, tuple ইত্যাদির জন্য ব্যবহার করা যায়।
