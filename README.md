| behavior |  input   |  output  |
|----------|:--------:|:--------:|
| The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels. | 3 | 3 |
| The program adds "ay" to single-letter words beginning with a vowel. | i | iay |
| The program adds "ay" to a multi-character words beginning with a vowel. | and | anday |
<!-- | The program adds "ay" to each word beginning with a vowel in a multi-word sentence | -->
| For words beginning with one consonant, the program moves that consonant to the end of the word and adds "ay" | pig | igpay |
| For words beginning with more than one consonant, the program moves all consecutive consonants to the end of the word and adds "ay". | translator | anslatortray |
| For words starting with "qu", the program will treat the "u" as a consonant and move the "qu" to the end of the word, and add "ay" | question | estionquay |
| For words containing "qu" after a consonant, the program will treat the "u" as a vowel and only move the consonants before the "u", and add "ay" | squeal | uealsqay |
| The program will treat words beginning with "y" as a consonant, and move the "y" to the end of the word, and add "ay" | yellow | ellowyay |
| For words containing "y" after one or more consonants, the program will treat the "y" as a vowel and move the consonant(s) to the end, and add "ay" | psychology | ychologypsay |
| The program recognizes vowels regardless of case | And | Anday |
| The program recognizes consonants regardless of case | Pig | igPay |
| The program recognizes words with inconsistent capitalization | cAt | Atcay |
