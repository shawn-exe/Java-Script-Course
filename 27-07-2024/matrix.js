let m=[
      [1,2,3],
      [3,4,5],
      [8,9,3],
];
for(let i=0;i<m.length;i++)
{
    let row=" ";
    for(let j=0;j<m[i].length;j++)
        {
            row +=m[i][j] + " "
        }
console.log(row)
}