# versionTester
CRA, a UI to support a version-spec checking function 

 Is the version within the spec?
 -------------------------------

 A version is within a spec if it satisfies all constraints of that spec. The function takes a version V and a spec S as input, and returns a true statement if and only if V is within S.


 What is a version?
 ------------------

 A version is a string that consists of either:
 1. An integer, OR
 2. An integer followed by a period followed by an integer.

 Some example versions:

 - "36"
 - "1.35"
 - "2.0"

 A version that is a plain integer has an implicit ".0" appended to it. For example, "1" is equivalent to "1.0".


 What is a spec?
 ---------------

 A spec is a string composed of one or more constraints separated by commas.

 A constraint is a combination of an operator and a version.

 Some example constraints:

 - ">1.3"
 - "<=2"
 - ">=2.5"

 Some example specs:

 - ">1.3,<=2"
 - ">=2.5,<4"
 - ">0,<2"