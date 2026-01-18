export function reverse(x)
{
let left=0
let right=x.length-1

while (left<right)
{
    let temp=x[left]
    x[left]=x[right]
    x[right]=temp
    left++
    right--

}
console.log(x)
}

export function min(a)
{
 let min=a[0]
    a.forEach(element => {
        if(min>element)
        min=element
    });
    console.log("minimum",min)
}

export function maximum(a)
{
    let max=a[0]
a.forEach(element=>{
if (element>max)
max=element

}
)
console.log("maximum",max)
}

export function secondLargest(a)
{
    let largest=a[0], secondLargest=-1;
    for (let i=0;i<a.length;i++)
    {
        if(a[i]>largest)
        largest=a[i]
    }
    for (let j=0;j<a.length;j++)
    {
        if(a[j]>secondLargest && a[j]!==largest)
        secondLargest=a[j]
    }
    console.log("Second largest",secondLargest);
}


export function secondLargestOptimal(a)
{
    let largest=a[0], secondLargest=-1;
    for (let i=0;i<a.length;i++)
    {
        if(a[i]>largest)
       {secondLargest=largest 
        largest=a[i]
    }
    else if (a[i]<largest && a[i]>secondLargest)
    {
        secondLargest=a[i]
    }
    }
    
    console.log("Second largest",secondLargest);
}


export function checkSorted(a)
{   let sorted=true
    for (let i =0;i<a.length-1;i++)
    {
        if (a[i+1]<a[i])
            {sorted=false
            break;}

    }
    console.log(sorted)
}

export function removeDuplicates(a)
{
    let i=0;
    for (let j=1;j<a.length;j++)
    {
        if (a[i]!==a[j])
        {
            a[i+1]=a[j]
            i++
        }
    }
    console.log("Unique elements=",i+1)
    
}