# Alien-Numeral-to-Integer

Test
Symbol Value
A 1
B 5
Z 10
L 50
C 100
D 500
R 1000


For example, 2 is written as AA in Alien numeral, just two ones added together. 12 is
written as ZAA, which is simply Z +
AA. The number 27 is written as ZZBAA, which is ZZ + B + AA.
Alien numerals are usually written largest to smallest from left to right. However, the
numeral for four is not AAAA.
Instead, the number four is written as AB. Because the one is before the five we
subtract it making four. The same principle applies to the number nine, which is written
as AZ. There are six instances where subtraction is used:
◦ A can be placed before B (5) and Z (10) to make 4 and 9.
◦ Z can be placed before L (50) and C (100) to make 40 and 90.
◦ C can be placed before D (500) and R (1000) to make 400 and 900.
Given a Alien numeral, convert it to an integer.
Example 1:
Input: s = "AAA"
Output: 3
Explanation: AAA = 3.
Example 2:
Input: s = "LBAAA"
Output: 58
Explanation: L = 50, B= 5, AAA = 3.
Example 3:
Input: s = "RCRZCAB"
Output: 1994
Explanation: R = 1000, CR = 900, ZC = 90 and AB = 4.
