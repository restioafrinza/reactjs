import logo from './logo.svg';
import './App.css';

function App() {
    const category  = "RUNNING";
    const price     = 7400000;
    return ( 
        <div className = "Parent-box" >
            <FotoProduk/>
            < ProdukInfo category = "Holiday" title = "Pinky Swagg" / >
        </div>
    );
}

function FotoProduk(){
    return ( 
        <div className = "Foto" >
            <img src = "sepatu.jpg" / >
        </div>
    );
}

function ProdukInfo(props){
    const {category, title} = props;
    const price = 7400000;
    return (
        <div className="Deskripsi">
            <p className="Cate">{category}</p>
            <h1 className="Title">{title}</h1>
            <p className="Price">IDR {price}</p>
            <p className="Info">
                One of most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original form '88. Signature details and materials celebrate the game-changing icon.
            </p>
            <a onClick={TambahProduk} href="#">Add to Cart</a>
        </div>
    );
}

function TambahProduk() {
    console.log("tambahkan produk");
}

export default App;