import styled from "styled-components";



const List = () =>{
    // const suggestionArray = filteredArray.filter(suggestion => suggestion !== undefined);
    // if(suggestionArray){
    //     setLimit(suggestionArray.length);
    // }
    // const Books = () => {
    //     return (filteredArray.map((book, index) =>{
    //         if (book){
    //             const firstHalf = book.title.slice(0,book.title.toLowerCase().indexOf(value)+value.length)
    //             const secondtHalf = book.title.slice(book.title.toLowerCase().indexOf(value)+value.length)
    //             const isSelected = () => {
    //                 if (select === index) {
    //                     setSelect(index)
    //                     return true;
    //                 } 
    //                 return false;
    //             }
    //         return (
    //             <Item 
    //             key={book.id} 
    //             style={{background: isSelected() ? 'hsla(50deg, 100%, 80%, 0.25)' : 'transparent'}} 
    //             onMouseEnter={()=>setSelect(index)} 
    //             onClick={()=>{handleSelect(book.title)}}>
    //                 <span>{firstHalf}<Prediction>{secondtHalf}<Sub> in <Category>{book.categoryId}</Category></Sub></Prediction></span>
    //             </Item>           
    //             )
    //         }
    //     })
    //     )
        
    // }
    return (
        <ListBlock>
        Movie list
        </ListBlock>
    )
}

const ListBlock = styled.ul`
background-color: yellow;
display: block;
margin-top: 10px;
width: 300px;
box-shadow: 0px 5px 20px rgba(149, 157, 165, 0.2);
max-height:300px;
overflow: auto;
`

const Item = styled.li`
list-style-type: none;
/* margin-top: 15px; */
margin-left: 15px;
text-align: left;
width: 90%;
line-height: 20px;
padding-left:10px;
padding-top:10px;
padding-bottom: 10px;
cursor: pointer;
&:hover{
    background-color: lightyellow;
}
`
const Prediction = styled.span`
    font-weight: bold;
`
const Sub = styled.span`
    font-weight: lighter;
    font-style: italic;
`
const Category = styled.span`
    color: purple;
`
export default List