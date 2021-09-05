import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import Buscador from '../components/Buscador'
import Item from '../components/Item'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initialState';

const Home = () => {
    const initialState = useInitialState(API);
    console.log(initialState.mylist);
    return initialState.length === 0 ?  <h1>Loading...</h1> : (
            <div className="App">
                <Header/>
                <Buscador />
                {
                    initialState.mylist.length > 0 &&
                    <Categories title="Mi lista">
                        <Carousel>
                        {initialState.mylist.map(item => 
                                <Item key={item.id} {...item}/>
                                
                            )}
                        </Carousel>
                    </Categories>

                }
                {
                    initialState.trends.length > 0 &&
                    <Categories title="Tendencias">
                        <Carousel>
                            {initialState.trends.map(item => 
                                <Item key={item.id} {...item}/>
                                
                            )}
                            
                        </Carousel>
                    </Categories>
                }
                {
                    initialState.originals.length  > 0 &&
                    <Categories title="Originales">
                        <Carousel>
                        {initialState.originals.map(item => 
                                <Item key={item.id} {...item}/>
                                
                            )}
                        </Carousel>
                    </Categories>
                }
                
                <Footer/>
            </div>

    )
};

export default Home;