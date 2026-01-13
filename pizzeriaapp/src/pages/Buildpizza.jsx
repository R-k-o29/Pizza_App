import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function BuildPizza() {
  let navigateTo = useNavigate();

  const [ingredientData, SetIngredientData] = useState([]);

  const[singlePizzaData,setsinglePizzaData] = useState({
    name:"",
    image:"",
    price:"",
    type:"",
    customIngredients:[]
  })
  console.log(singlePizzaData.customIngredients);
  

  const [totalCost, setTotalCost] = useState(0);
  let pizzaId=useParams().pizzaId;

  let getPizzaData = ()=>{
    axios.get(`http://localhost:3002/api/pizza/view/${pizzaId}`).then((res)=>{
      return res.data;
    }).then((data)=>{
      if(data.status){
        setsinglePizzaData(
          prev=>({
            ...data.getRes,
            customIngredients:prev.customIngredients || []
          })
        );
        setTotalCost(data.getRes.price);
      }
    })
  }

  let getAllIngredients = () => {
    axios
      .get(`http://localhost:3003/api/ingredients/view`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        if (data.status) {
          SetIngredientData(data.viewObj);
        }
      });
  };
  useEffect(() => {
    getAllIngredients();
    getPizzaData();
  }, []);

  let handleIngredientChange=(ingredient,isChecked)=>{
    setsinglePizzaData(prev=>({
      ...prev,
      customIngredients:isChecked
      ? [...prev.customIngredients,ingredient.tname]
      : prev.customIngredients.filter(
        item=>item!==ingredient.tname
      )
    }
    ))

    setTotalCost(prev=>
      isChecked? prev + ingredient.price : prev-ingredient.price
    );
  }
  

  let addToCart = async()=>{
        const item={
        pizzaId: pizzaId,
        itemType:singlePizzaData.type,
        name: singlePizzaData.name,
        image: singlePizzaData.image,
        price: totalCost,
        customIngredients: singlePizzaData.customIngredients
      };
      await axios.post(`http://localhost:3004/api/cart/insert`,item).then(()=>{
        toast.success("Pizza is added to cart",{
            position:"top-right"
        });
      })
      navigateTo('/cart');
    }

  return (
    <>
      <Header />
      <div className="col-md-8 align-self-center mx-auto">
        <p className="text-center p-2">
        Pizzeria now gives you the option to build your own pizza. Customize
        your pizza by choosing the list of ingredients below.
      </p>
      <div className="p-5 pt-2 pb-2">
        <table className="table table-bordered text-center align-middle">
          {ingredientData.map((item, index) => {
            return (
              <>
                <tbody className="table-striped">
                  <tr>
                    <td>
                      <img
                        src={item.image}
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </td>
                    <td className="fw-bold">
                      {item.tname} &nbsp; ₹{item.price}
                    </td>
                    <td className="text-warning">
                      <input
                        type="checkbox"
                        name="Add"
                        onChange={(e) =>
                          handleIngredientChange(item, e.target.checked)
                        }
                      />
                      &nbsp;Add
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
          <tfoot>
            <tr>
              <td className="fw-bold">Total cost: ₹{totalCost} </td>
              <td>
                <button className="btn btn-dark text-white mt-2" onClick={addToCart}>
                  Go to Cart
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      </div>
      <Footer />
    </>
  );
}
