import React, { useState } from 'react';

import './styles.css';
import Dog from '../../assets/dog.svg'
import { lowestPrice } from '../../services/localData'

export default function Petshop() {
    const [date, setDate] = useState('');
    const [small, setSmall] = useState('');
    const [big, setBig] = useState('');
    const [petshop, setPetshop] = useState({ totalPrice: '', name: '' });

    const handleSubmit = e => {
        e.preventDefault();
        if (date === '' || small === '' || big === '') {
            alert("Preencha todos os campos")
            return
        }
        const bestPetshop = lowestPrice(date, small, big)
        setPetshop(bestPetshop);
    }

    const renderPetshop = () => {
        if (petshop.name !== '') {
            return (
                <>
                    <div className="result">{`O melhor petshop é ${petshop.name}`}</div>
                    <div className="result">{`Valor total: R$${petshop.totalPrice.toLocaleString('pt-BR')},00`}</div>
                </>
            )
        }
    }

    return (
        <div className="logon-container">
            <section className="form" >
                <form>
                    <div className="title">
                        <h1>Pesquisa PetShop</h1>
                        <img src={Dog} alt="PetShop" />
                    </div>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder="Quantidade de cachorros pequenos"
                        value={small}
                        onChange={e => setSmall(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder="Quantidade de cachorros grandes"
                        value={big}
                        onChange={e => setBig(e.target.value)}
                    />
                    <button className="button" onClick={handleSubmit}>Buscar</button>
                    {renderPetshop()}
                </form>
            </section>
        </div>
    )
}