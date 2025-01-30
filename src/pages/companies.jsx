import { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "../components/button";
import Header from "../components/header";
import Input from "../components/input";
import Nav from "../components/nav";

export default function Companies() {
    const companies = JSON.parse(localStorage.getItem("companies")) || [];

    const [selectedCompanies, setSelectedCompanies] = useState([]);

    const handleCheckboxChange = (e, companyId) => {
        if (e.target.checked) {
            setSelectedCompanies(prev => [...prev, companyId]);
        } else {
            setSelectedCompanies(prev => prev.filter(id => id !== companyId));
        }
    };

    const checkAll = (e) => {
        if (e.target.checked) {
            setSelectedCompanies(companies.map(item => item.id));
        } else {
            setSelectedCompanies([]);
        }
    };

    const deleteCompanies = (selectedCompanies) => {
        const newCompanies = companies.filter(item => !selectedCompanies.includes(item.id));
        localStorage.setItem("companies", JSON.stringify(newCompanies));
        setSelectedCompanies([]);
    };

    const editCompanies = (selectedCompanies) => {
        if (selectedCompanies.length > 1) {
            alert("Selecione apenas uma empresa para editar");
            return;
        }

        if (selectedCompanies.length === 0) {
            alert("Selecione uma empresa para editar");
            return;
        }

        const companyId = selectedCompanies[0];
        window.location.href = `/companies/register/${companyId}`;
    }

    return (
        <div>
            <Header />
            <div className="flex">
                <Nav />
                <div className="w-full p-8">
                    <div className="flex w-full items-center justify-between h-12">
                        <h1 className="text-2xl font-medium text-secondary">Empresas</h1>

                        <div className="flex items-center justify-between">
                            {selectedCompanies.length > 0 && (
                                <div className="flex items-center space-x-4">
                                    <Button type="icon" className="w-14 !h-12" onClick={() => deleteCompanies(selectedCompanies)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-zinc-700">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                        </svg>
                                    </Button>
                                    <Button type="icon" className="w-14 !h-12 px-4" onClick={() => editCompanies(selectedCompanies)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-zinc-700">
                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                        </svg>

                                    </Button>
                                </div>
                            )}

                            <div className="flex items-center justify-center space-x-4 w-full">
                                <Input type="search" placeholder="Pesquisar" className="ml-4" />


                                <Link to="/companies/register">
                                    <Button type="primary" className="w-48 !h-12">Cadastrar</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <table className="w-full mt-10 text-left">
                        <thead>
                            <tr className="h-14 text-secondary text-sm border-b px-10">
                                <th className="pl-4">
                                    <Input type="checkbox" onChange={(e) => checkAll(e)} checked={selectedCompanies.length === companies.length && companies.length > 0} />
                                </th>
                                <th>Nome</th>
                                <th>CNPJ</th>
                                <th>Email</th>
                                <th>Estado</th>
                                <th>Cidade</th>
                                <th>Contato</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="text-center p-20">Nenhuma empresa cadastrada</td>
                                </tr>
                            )}

                            {companies.map((item) => (
                                <tr className="h-14 border-b hover:bg-zinc-100" key={item.id}>
                                    <td className="pl-4">
                                        <Input
                                            type="checkbox"
                                            className="mt-1"
                                            onChange={(e) => handleCheckboxChange(e, item.id)}
                                            checked={selectedCompanies.includes(item.id)}
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.cnpj}</td>
                                    <td>{item.email}</td>
                                    <td>{item.state}</td>
                                    <td>{item.city}</td>
                                    <td>{item.number}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
