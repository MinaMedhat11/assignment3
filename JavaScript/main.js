var SiteName=document.getElementById('siteName')
var SiteURL=document.getElementById('siteURL')


var bookmarkList=[]
if(bookmarkList){
    bookmarkList=JSON.parse(localStorage.getItem('bookmark'))
    bookmarkDisplay()

}
function submitData() {

var sitebookmark={
    WebsiteName:SiteName.value,
    WebsiteURL:SiteURL.value,
}
bookmarkList.push(sitebookmark)

localStorage.setItem('bookmark', JSON.stringify(bookmarkList));

bookmarkDisplay()
clearInputs()

}
function bookmarkDisplay(){
var cartona=""
for(var i=0; i<bookmarkList.length; i++){
cartona+=
`<tr>
<td>${i}</td>
<td>${bookmarkList[i].WebsiteName}</td>
<td><a href="${bookmarkList[i].WebsiteURL}"><button class="btn btn-success"><i class="fa-solid fa-eye" style="color: #ffffff;"></i> Visit</button></a></td>
<td><button onclick="bookmarkDelete(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i> Delete</button></td>
</tr>`


}
document.getElementById('dataTable').innerHTML=cartona
}

function clearInputs(){
    SiteName.value=''
    SiteURL.value=''
}




function bookmarkDelete(index){
    console.log(index);
    bookmarkList.splice(index,1)
bookmarkDisplay()


}

