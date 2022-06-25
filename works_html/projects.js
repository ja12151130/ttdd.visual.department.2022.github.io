const small_img = document.querySelectorAll(".innerPic");
let current_z = 0;
let current_showing = document.querySelector(".showing_work")

for (let i = 0; i < small_img.length; ++i) {
    if (small_img[i].style.zIndex == "") {
        small_img[i].style.zIndex = 0;
    }
    small_img[i].addEventListener('mouseenter', function () {

        //試著讓滑鼠移動到的圖片的 z-index 增加，滑到的圖片往前跳
        console.log("The type of this.style.zIndex is " + typeof (this.style.zIndex));
        current_z = parseInt(this.style.zIndex);
        // console.dir(this);

        console.log(small_img[i].firstChild);
        console.log("The number of current_z is " + current_z + ",the type of current_z is " + typeof (current_z));
        current_z += 2;
        console.log("The number of current_z is now " + current_z);
        this.style.zIndex = current_z;

        //移除原來圖像，並創造一個新的
        console.dir(this.firstChild.nextElementSibling);
        console.log("The source of this image used to be " + current_showing.src)

        current_showing.remove();
        current_showing = document.createElement(this.firstChild.nextElementSibling.localName);
        console.dir(this.firstChild.nextElementSibling);
        current_showing.src = this.firstChild.nextElementSibling.src;
        current_showing.style.height = "100%"
        current_showing.setAttribute("controls", "controls")
        //current_showing = this.firstChild.nextElementSibling;
        console.log(typeof (this.firstChild.nextElementSibling))
        document.querySelector(".large_project").appendChild(current_showing)
        // console.log("After removing, the source of image is " + current_showing.src)
        // console.log("this.firstChild.nextElementSibling.src is " + this.firstChild.nextElementSibling.src)

        // current_showing.src = this.firstChild.nextElementSibling.src
        // console.dir(current_showing);

        // console.log("The source of this image is now " + current_showing.src);

    })

    small_img[i].addEventListener('mouseleave', function () {
        current_z -= 2;
        this.style.zIndex = current_z;
        console.log('The current_z is now' + this.style.zIndex);
    })
}







