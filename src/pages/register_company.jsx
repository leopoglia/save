import Button from "../components/button";
import Header from "../components/header";
import Input from "../components/input";
import Nav from "../components/nav";

import { useParams } from 'react-router-dom';

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function RegisterCompany() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [company, setCompany] = useState({
        id: "",
        cnpj: "",
        name: "",
        fantasy_name: "",
        contact: "",
        email: "",
        cep: "",
        country: "",
        state: "",
        city: "",
        neighborhood: "",
        street: "",
        number: "",
        complement: ""
    });


    useEffect(() => {
        if (id) {
            let companies = localStorage.getItem("companies");
            let company = JSON.parse(companies).find(item => item.id == id);

            setCompany(company);
        }
    }, []);


    const saveCompany = (company) => {
        let companies = localStorage.getItem("companies");

        if (company.cnpj !== "" && company.name !== "" && company.fantasy_name !== "" && company.contact !== "" && company.email !== "" && company.cep !== "" && company.country !== "" && company.state !== "" && company.city !== "" && company.neighborhood !== "" && company.street !== "" && company.number !== "" && company.complement !== "") {

            if(company.cnpj.length != 19){
                toast.error("CNPJ inválido!");
                return;
            }



            if (!companies) {
                company.id = 1;

                localStorage.setItem("companies", JSON.stringify([company]));
                navigate("/companies");
                return;
            }

            if (id) {
                let newCompanies = JSON.parse(companies).map(item => {
                    if (item.id == id) {
                        return company;
                    }

                    return item;
                });

                localStorage.setItem("companies", JSON.stringify(newCompanies));
                navigate("/companies");
                return;
            }

            company.id = JSON.parse(companies).length + 1;
            localStorage.setItem("companies", JSON.stringify([...JSON.parse(companies), company]));

            navigate("/companies");
        } else {
            toast.error("Preencha todos os campos!");
        }
    }

    const formatCNPJ = (value) => {
        value = value.replace(/\D/g, '');

        if (value.length > 14) {
            return value.slice(0, 14).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        }

        if (value.length <= 2) {
            return value;
        } else if (value.length <= 5) {
            return value.replace(/(\d{2})(\d{1})/, '$1.$2');
        } else if (value.length <= 8) {
            return value.replace(/(\d{2})(\d{3})(\d{1})/, '$1.$2.$3');
        } else if (value.length <= 12) {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3/$4');
        } else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        }
    };



    return (
        <div>
            <Header />
            <div className="flex">
                <Nav />
                <div className="w-full p-8">
                    <div className="flex w-full items-center justify-between h-12">
                        <h1 className="text-2xl font-medium text-secondary">Cadastrar Empresa</h1>
                    </div>

                    <div className="flex items-center flex-col space-y-4 mt-8">
                        <div className="flex w-full space-x-4">
                            <Input type="text" placeholder="CNPJ" className="w-1/3" onChange={(e) => setCompany({ ...company, cnpj: e.target.value })} value={formatCNPJ(company?.cnpj)} />
                            <Input type="text" placeholder="Nome" className="w-1/3" onChange={(e) => setCompany({ ...company, name: e.target.value })} value={company?.name} />
                            <Input type="text" placeholder="Nome Fantasia" className="w-1/3" onChange={(e) => setCompany({ ...company, fantasy_name: e.target.value })} value={company?.fantasy_name}  />
                        </div>

                        <div className="flex w-full space-x-4">
                            <Input type="text" placeholder="Contato" className="w-1/3" onChange={(e) => setCompany({ ...company, contact: e.target.value })} value={company?.contact} />
                            <Input type="text" placeholder="E-mail" className="w-1/3" onChange={(e) => setCompany({ ...company, email: e.target.value })} value={company?.email} />
                            <Input type="text" placeholder="CEP" className="w-1/3" onChange={(e) => setCompany({ ...company, cep: e.target.value })} value={company?.cep} />
                        </div>

                        <div className="flex w-full space-x-4">
                            <Input type="text" placeholder="País" className="w-1/4" onChange={(e) => setCompany({ ...company, country: e.target.value })} value={company?.country} />
                            <Input type="text" placeholder="Estado" className="w-1/3" onChange={(e) => setCompany({ ...company, state: e.target.value })} value={company?.state} />
                            <Input type="text" placeholder="Cidade" className="w-1/3" onChange={(e) => setCompany({ ...company, city: e.target.value })} value={company?.city} />
                            <Input type="text" placeholder="Bairro" className="w-1/3" onChange={(e) => setCompany({ ...company, neighborhood: e.target.value })} value={company?.neighborhood} />
                        </div>

                        <div className="flex w-full space-x-4">
                            <Input type="text" placeholder="Rua" className="w-1/2" onChange={(e) => setCompany({ ...company, street: e.target.value })} value={company?.street} />
                            <Input type="text" placeholder="Número" className="w-1/4" onChange={(e) => setCompany({ ...company, number: e.target.value })} value={company?.number}  />
                            <Input type="text" placeholder="Complemento" className="w-1/3" onChange={(e) => setCompany({ ...company, complement: e.target.value })} value={company?.complement} />
                        </div>
                    </div>

                    <div className="flex items-center justify-end w-full">
                        <Button onClick={() => saveCompany(company)} type="primary" className="!w-48 h-12 mt-8">Salvar</Button>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
}