import logo from '../assets/logo.svg'
import login from '../assets/log-in.svg';
import email from '../assets/mail.svg';
import emailActive from '../assets/mail-focus.svg';
import lock from '../assets/lock.svg';
import lockActive from '../assets/lock-focus.svg';
import eye from '../assets/eye.svg';
import {useState} from "react";


export default function Login() {
    const [emailSelect, setEmailSelected] = useState(false);
    const [passwordSelect, setPasswordSelect] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);

    const handlePasswordShow = () => {
        setPasswordShow(!passwordShow);
    }
    return (
        <>
            <div className="flex flex-row text-base font-poppins">
                <div className="flex flex-col bg-base w-1/2">
                    <div className="m-6">
                        <img src={logo}/>
                    </div>

                    <div className="flex flex-col m-auto bg-form xl:w-[600px] xl:h-[500px] rounded">

                        <div className="flex flex-col mt-[30px] mx-auto gap-1 p-2">
                            <div className="flex flex-row gap-2">
                                <img className="w-[25px]" src={login}/>
                                <h1 className="text-2xl">Faça seu login</h1>
                            </div>
                            <p className="text-sm">Entre com suas informações de cadastro.</p>
                        </div>


                        <div className="flex flex-col mx-auto p-3">
                            <form className="flex flex-col">
                                <div className="flex flex-col">
                                    <label className="font-bold py-2">E-mail</label>
                                    <div
                                        className={`flex items-center`}>
                                        <img className="absolute mx-1" src={emailSelect ? emailActive : email}/>
                                        <input
                                            className="pl-6 bg-form outline-none w-full focus:border-prim border-2 rounded py-2 px-2 border-white hover:border-prim"
                                            type="email"
                                            placeholder="Digite seu email"
                                            onSelect={() => setEmailSelected(true)}/>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-3">
                                    <label className="font-bold py-2">Senha</label>
                                    <div
                                        className={"flex relative items-center"}>
                                        <img className="absolute mx-1" src={passwordSelect ? lockActive : lock} alt=""/>
                                        <input
                                            className="pl-6 bg-form outline-none w-full focus:border-prim border-2 rounded py-2 px-2 border-white hover:border-prim"
                                            type={passwordShow ? "text" : "password"} placeholder="Digite sua senha"
                                            onSelect={() => setPasswordSelect(true)}/>
                                        <img className="absolute right-2 cursor-pointer"
                                             title={passwordShow ? "Esconder Senha" : "Mostrar Senha"} src={eye}
                                             onClick={handlePasswordShow} alt=""/>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-5 p-2">
                                    <div className="flex flex-row gap-2">
                                        <input className="bg-form text-prim accent-prim" type="checkbox"/>
                                        <p>Lembre-me</p>
                                    </div>
                                    <div>
                                        <span><a className="font-bold text-prim text-sm"
                                                 href={"#"}>Esqueci minha senha</a></span>
                                    </div>
                                </div>

                                <div
                                    className="flex center m-auto rounded bg-prim w-full hover:scale-95 hover:bg-prim2 transition cursor-pointer">
                                    <input className="text-black m-auto font-poppins py-4 px-4 cursor-pointer"
                                           type="submit"
                                           value="Entrar"/>
                                </div>
                            </form>
                        </div>
                        <a href={"#"} className="text-prim m-auto">Não tem uma conta? <span
                            className="text-prim font-bold">Registre-se</span></a>
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="xl:h-screen xl:w-screen" src="../../src/assets/side-image.jpg"/>
                </div>
            </div>
        </>
    )
}
