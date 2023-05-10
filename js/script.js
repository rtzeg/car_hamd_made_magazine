let doc = document

let cars = [
    {
        name:'LAMBORGHINI URUS PERFORMANTE',
        color:'green',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/1/6/16169reg113143_01.jpg',
        cometn:'Lamborghini Urus Performante может набрать «сотню» за 3,3 с против 3,6 с у базовой модели. Время разгона до 200 км/ч сократилось с 12,8 до 11,5 с, но максимальная скорость лишь символически выросла с 305 до 306 км/ч. В родной Италии такой кроссовер будет стоить от 215 тысяч евро против 198 тысяч за базовую модель.',
        priys:'203',
        id:''
    },{
        name:'LAMBORGHINI HURACÁN EVO',
        color:'green',
        cometn:'Huracán EVO — это эволюция модели с самым успешным для марки Lamborghini двигателем V10. Суперкар стал результатом совершенствования и соединения лучших характеристик и элементов с повышенной производительностью, а также квинтэссенцией новых решений в области динамики и дизайна.',
        priys:'203',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/9/0/9013395REG000143XX_01_1.jpg',
        id:''
    },{
        name:'LAMBORGHINI HURACÁN EVO RWD',
        color:'blue',
        cometn:'Huracán EVO — это эволюция модели с самым успешным для марки Lamborghini двигателем V10. Суперкар стал результатом совершенствования и соединения лучших характеристик и элементов с повышенной производительностью, а также квинтэссенцией новых решений в области динамики и дизайна.',
        priys:'203',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/1/5/15984reu237143_01_tris.jpg',
        id:''
    },{
        name:'LAMBORGHINI AVENTADOR ULTIMAE',
        color:'grey',
        cometn:'Lamborghini Aventador (код кузова — LP700-4) — суперкар, выпускавшийся компанией Lamborghini с 2011 по 2021 год. Aventador пришёл на смену Lamborghini Murciélago и оснащался 6,5-литровым V-образным 12-цилиндровым двигателем мощностью от 700 до 780 л. с. в зависимости от модификации.',
        priys:'305',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/1/6/16152ree122118_01_bis.jpg',
        id:''
    },{
        name:'LAMBORGHINI HURACÁN STERRATO',
        color:'white',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/1/6/16248REW000143_01.jpg',
        cometn:'Lamborghini Huracan Sterrato имеет защитный пластиковый обвес, снизу установлена алюминиевая защита, на крыше — багажные рейлинги, а воздухозаборник двигателя поднят над крышей, чтобы в него попадало меньше пыли. В итоге габаритная высота купе выросла на 83 мм — до 1248 мм.',
        priys:'300',
        id:''
    },{
        name:'LAMBORGHINI HURACÁN EVO',
        color:'red',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/9/0/9012890REO036143XX_01_1.jpg',
        cometn:'Huracán EVO — это эволюция модели с самым успешным для марки Lamborghini двигателем V10. Суперкар стал результатом совершенствования и соединения лучших характеристик и элементов с повышенной производительностью, а также квинтэссенцией новых решений в области динамики и дизайна.',
        priys:'203',
        id:''
    },{
        name:'LAMBORGHINI HURACÁN EVO RWD COUPE',
        color:'yellow',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/1/4/14516rey053143_01_bis.jpg',
        cometn:'Huracán EVO — это эволюция модели с самым успешным для марки Lamborghini двигателем V10. Суперкар стал результатом совершенствования и соединения лучших характеристик и элементов с повышенной производительностью, а также квинтэссенцией новых решений в области динамики и дизайна.',
        priys:'230',
        id:''
    }
]
let arrSliyd = [
    {
        name:'LAMBORGHINI HURACÁN STERRATO',
        color:'white',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/1/6/16248REW000143_01.jpg',
        cometn:'Lamborghini Huracan Sterrato имеет защитный пластиковый обвес, снизу установлена алюминиевая защита, на крыше — багажные рейлинги, а воздухозаборник двигателя поднят над крышей, чтобы в него попадало меньше пыли. В итоге габаритная высота купе выросла на 83 мм — до 1248 мм.',
        priys:'300',
        id:''
    },{
        name:'LAMBORGHINI HURACÁN EVO',
        color:'red',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/9/0/9012890REO036143XX_01_1.jpg',
        cometn:'Huracán EVO — это эволюция модели с самым успешным для марки Lamborghini двигателем V10. Суперкар стал результатом совершенствования и соединения лучших характеристик и элементов с повышенной производительностью, а также квинтэссенцией новых решений в области динамики и дизайна.',
        priys:'203',
        id:''
    },{
        name:'LAMBORGHINI HURACÁN EVO RWD COUPE',
        color:'yellow',
        img:'https://static.lamborghinistore.com/rx/500x,ofmt_webp/media/catalog/product/1/4/14516rey053143_01_bis.jpg',
        cometn:'Huracán EVO — это эволюция модели с самым успешным для марки Lamborghini двигателем V10. Суперкар стал результатом совершенствования и соединения лучших характеристик и элементов с повышенной производительностью, а также квинтэссенцией новых решений в области динамики и дизайна.',
        priys:'230',
        id:''
    }
]
function sliyd(imges,box) {
    let div = doc.createElement('div')
    div.classList.add('swiper-slide')
    div.classList.add('sliyds')
    let img = doc.createElement('img')
    img.src = imges
    div.append(img)
    box.append(div)

}
function contents(imeges,name,priys,cometn,box,id) {
    let divbox = doc.createElement('div')
    divbox.classList.add('block')
    let divshop = doc.createElement('div')
    divshop.classList.add('shop')
    divshop.id = id
    let divimg = doc.createElement('div')
    divimg.classList.add('img')
    let img =  doc.createElement('img')
    img.src = imeges
    let h2 =  doc.createElement('h2')
    h2.innerHTML = name
    let p =  doc.createElement('p')
    p.innerHTML = cometn
    let span =  doc.createElement('span')
    span = `${priys} $`
    let icon = doc.createElement('span')
    icon.classList.add('material-icons')
    icon.innerHTML='shopping_bag'
    divbox.append(divshop)
    divshop.append(icon)
    divbox.append(divimg)
    divimg.append(img)
    divbox.append(h2)
    divbox.append(p)
    divbox.append(span)
    box.append(divbox)
}
function color(col , box) {
    let div1 = doc.createElement('div')
    div1.classList.add('elem')
    div1.id = 'colors'
    let div2 = doc.createElement('div')
    div2.classList.add('color')
    div1.dataset.color = col
    div2.style.background= col
    let p = doc.createElement('p')
    p.innerHTML = col
    div1.append(div2)
    div1.append(p)
    box.append(div1)
}
let lokalArr = ''
let swipcont = doc.querySelector('.swipcont'),kotalog = doc.querySelector('#color'),thiscontents = doc.querySelector('#thiscontents')
for(let i of [... new Set(cars.map(item=> item.color))]){
    color(i,kotalog)
}
arrSliyd.forEach((i,item) => {
    i.id = item
    sliyd(i.img,swipcont)
});
cars.forEach((i , item) => {
    i.id = item
    
    contents(i.img,i.name,i.priys,i.cometn,thiscontents ,item)
});
let colorsFilt = doc.querySelectorAll('#colors')
colorsFilt.forEach((item) => {
    // console.log(item);
    item.onclick = ()=>{
        thiscontents.innerHTML =  ''
        cars.forEach((i,num) => {
            i.id = num
            if (item.dataset.color == i.color) {
                contents(i.img,i.name,i.priys,i.cometn,thiscontents,i.id)
            }
        });
        if (item.dataset.color == 'all') {
            cars.forEach((i,num)=>{
                contents(i.img,i.name,i.priys,i.cometn,thiscontents,i.id)
            })
            
        }
        
    }
});
let search = doc.querySelector('#search'),modal = doc.querySelector('.modal'),myInp = doc.querySelector('#myInp')
let bol = false
let searchBox = doc.querySelector('#searchBox')
search.onclick = ()=>{
    modal.classList.toggle('modalAcktive')
    if (bol == false) {
        search.innerHTML = 'close'
        bol = true
        doc.body.style.overflow = 'hidden'
    }else{
        search.innerHTML = 'search'
        bol = false
        doc.body.style.overflow = 'auto'
        searchBox.innerHTML = ''
    }
}

myInp.oninput=()=>{
    searchBox.innerHTML = ''
    if (myInp.value !== '') {
        cars.forEach((i , item) => {
            i.id = item
            if (i.name.toLowerCase().search(myInp.value) == 0|| i.cometn.toLowerCase().search(myInp.value) == 0||i.color.toLowerCase().search(myInp.value) == 0) {
                contents(i.img,i.name,i.priys,i.cometn,searchBox,i.id)
            }
        });
    }else{
        searchBox.innerHTML = ''

    }
    
}

let basket = doc.querySelector('#basket')

basket.onclick=(event)=>{
    
}

let shop1 = doc.querySelectorAll('.shop')

shop1.forEach((i,item )=>{
    i.onclick=()=>{
        console.log(cars[i.id]);
    }
})
