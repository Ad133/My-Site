let question_index=0;
let qn=1;
let c_q=0;
let scored=0;
let wronged=0;

// Creating an empty array to store the question and it value chosen
let Qtn_Value=[];


let question=[
{
   
     a:` x = 1`,

     b:`x = 2 `,

     c:` x=3`,

     d:`x = 4`,
     correctOption:'b',
},


{
    
     a:`75`,
     b:`80`,
     c:`90`,
     d:`95`,
     correctOption:'c',
},



{
    
     a:`x = -2`,
     b:`x = &pm;1`,
     c:`x = &pm;3`,
     d:`x = 1`,
     correctOption:'b',
},


{
    
     a:`k = -4`,
     b:`k = 3`,
     c:`k = 16/9`,
     d:`k = -9/16`,
     correctOption:'d',
},



{
    
     a:`g = 1.4`,
     b:`g &gt; 1.4`,
     c:`g &ge; 1.4`,
     d:`g &le; 1.4`,
     correctOption:'d',
},



{
    
     a:`x &le; -1/2 or x &ge; 3`,
     b:`x &lt; 2`, 
     c:`x &gt; 1.4`,
     d:`-1/2 &le; x &le; 3`,
    
     correctOption:'d',
},

{
    
     a:`a = -1 ; b = 5 `,
     b:`a = -3 ; b = 19 `,
     c:`a = -9 ; b = 45`,
     d:`a = -5 ; b = 20`,
     correctOption:'c',
},



{
     a:`y &gt; 4`,
     b:`y &lt; 6`,
     c:`y &gt; 6 and y &lt; 4`,
     d:`4 &lt; y &lt; 6 `,
     correctOption:'a',
},


{
     a:`-3 &lt; x &lt; 7/3`,
     b:`x &gt; -3`,
     c:`x &lt; 7/3`,
     d:`x &lt; -3 and x &gt; 7/3`,
     correctOption:'d',
},

{
     a:`x = -1`,
     b:`x = 2`,
     c:`x = -5`,
     d:`x = 4`,
     correctOption:'a',
},

{
     a:`x = 2`,
     b:`x = 1`,
     c:`x = 10`,
     d:`x = 5`,
     correctOption:'b',
},
{
     a:`x = 0.45 or x = -0.45`,
     b:`x = 0.567 or x = -0.567`,
     c:`x = 0.342 or x = -0.342`,
     d:`x = -0.6309 or x = 0.6309`,
     correctOption:'d',
},


{
     a:`x = 3, y = 2`,
     b:`x = 2, y = 1`,
     c:`x = 3, y = 1`,
     d:`x = 4, y = 3`,
     correctOption:'c',
},
{
     a:`x = 5, x =13/9 `,
     b:`x = 1 or x = 13/7`,
     c:`x = 4 or x = 3`,
     d:`x = 1 or x = 1/2`,
     correctOption:'a',
},


{
     a:`ln1, ln2`,
     b:`ln1, ln3`,
     c:`ln4, ln3`,
     d:`ln2, ln4`,
     correctOption:'b',
},

];



