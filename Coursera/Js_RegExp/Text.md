Did You Notice?

Regular expression arguments (instead of string arguments) can be used in the methods above.
Regular expressions can make your search much more powerful (case insensitive for example).

Regular Expression Modifiers
Modifiers can be used to perform case-insensitive more global searches:

Modifier	Description	Try it
i	        Perform case-insensitive matching	
g	        Perform a global match (find all matches rather than        stopping after the first match)	
m	        Perform multiline matching

Regular Expression Patterns
Brackets are used to find a range of characters:

Expression	Description	Try it
[abc]	    Find any of the characters between the brackets	
[0-9]	    Find any of the digits between the brackets	
(x|y)	    Find any of the alternatives separated with |	
Metacharacters are characters with a special meaning:

Metacharacter	Description	Try it
\d	            Find a digit	
\s	            Find a whitespace character	
\b	            Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	        Find the Unicode character specified by the hexadecimal number xxxx	


Quantifiers define quantities:

Quantifier	Description	Try it
n+	        Matches any string that contains at least one n
n*	        Matches any string that contains zero or more occurrences of n
n?	        Matches any string that contains zero or one occurrences of n