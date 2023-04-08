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
                <div className="flex h-screen w-screen flex-col bg-base md:flex md:w-1/2 md:flex-col">
                    <div className="m-6">
                        <img src={logo}/>
                    </div>

                    <div className="mt-5 flex flex-col rounded h-[600px] md:bg-form md:w-[600px] md:h-[550px] md:m-auto gap-3">

                        <div className="mx-auto flex flex-col gap-3 p-2 mt-[30px] self-start">
                            <div className="flex flex-row gap-2">
                                <img className="w-[25px]" src={login}/>
                                <h1 className="text-2xl">Faça seu login</h1>
                            </div>
                            <p className="text-sm mx-3">Entre com suas informações de cadastro.</p>
                        </div>


                        <div className="mx-auto flex flex-col p-3">
                            <form className="flex flex-col gap-3">
                                <div className="flex flex-col">
                                    <label className="py-2 font-bold">E-mail</label>
                                    <div
                                        className={`flex items-center`}>
                                        <img className="absolute mx-1" src={emailSelect ? emailActive : email}/>
                                        <input
                                            className="w-full rounded border-2 border-white px-2 py-2 pl-6 outline-none bg-form hover:border-prim focus:border-prim"
                                            type="email"
                                            placeholder="Digite seu email"
                                            onSelect={() => setEmailSelected(true)}/>
                                    </div>
                                </div>

                                <div className="mt-3 flex flex-col">
                                    <label className="py-2 font-bold">Senha</label>
                                    <div
                                        className={"flex relative items-center"}>
                                        <img className="absolute mx-1" src={passwordSelect ? lockActive : lock} alt=""/>
                                        <input
                                            className="w-full rounded border-2 border-white px-2 py-2 pl-6 outline-none bg-form hover:border-prim focus:border-prim"
                                            type={passwordShow ? "text" : "password"} placeholder="Digite sua senha"
                                            onSelect={() => setPasswordSelect(true)}/>
                                        <img className="absolute right-2 cursor-pointer"
                                             title={passwordShow ? "Esconder Senha" : "Mostrar Senha"} src={eye}
                                             onClick={handlePasswordShow} alt=""/>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-x-16 p-2">
                                    <div className="flex flex-row gap-2">
                                        <input className="bg-form text-prim accent-prim" type="checkbox"/>
                                        <p>Lembre-me</p>
                                    </div>
                                    <div>
                                        <span><a className="text-sm font-bold text-prim"
                                                 href={"#"}>Esqueci minha senha</a></span>
                                    </div>
                                </div>

                                <div
                                    className="m-auto flex w-full cursor-pointer rounded transition center bg-prim hover:bg-prim2 hover:scale-95">
                                    <input className="m-auto cursor-pointer px-4 py-4 text-black font-poppins"
                                           type="submit"
                                           value="Entrar"/>
                                </div>
                            </form>
                        </div>
                        <a href={"#"} className="m-auto text-prim">Não tem uma conta? <span
                            className="font-bold text-prim">Registre-se</span></a>
                    </div>
                </div>
                <div className="hidden md:relative md:block md:w-1/2">
                    <img className="md:h-screen md:w-screen" src="/img/side-image.jpg"/>
                </div>
            </div>
        </>
    )
}
