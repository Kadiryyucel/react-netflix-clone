import "./Style.css"
import logo from "../assets/net.png"
import user from "../assets/kado.png"
import {useEffect, useState, useRef} from "react";

function Header() {
    let menu = ["Ana sayfa", "Diziler", "Filmler", "Yeni ve Popüler", "Listem", "Dile Göre Göz At"]
    let person_menu = [
        {img: logo, text: "Kadir"},
        {ico: "ri-pencil-line", text: "Profil Yönetimi"},
        {ico: "ri-exchange-funds-line", text: "Profil Aktar"},
        {ico: "ri-user-line", text: "Hesap"},
        {ico: "ri-question-line", text: "Yardım Merkezi"}];

    function getScroll(e) {
        if (window.scrollY === 0) {
            setScroll(window.scrollY)
        } else {
            setScroll(window.scrollY)
        }
    }


    const [search, setSearch] = useState(false);

    function filter(e) {
        setSearch(true);
        e.stopPropagation()
    }

    const focusSearch = useRef();

    function goBackSearch(e) {
        let el = focusSearch.current
        if (!el.contains(e.target) && el !== e.target) {
            setSearch(false)
        }
    }

    const searchInput = useRef();
    useEffect(() => {
        if (search) {
            searchInput.current.focus();
            document.body.addEventListener("click", goBackSearch)
        }
        return () => document.body.removeEventListener("click", goBackSearch);
    }, [search])

    const [checkScrollTop, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", getScroll)
        return () => window.removeEventListener("scroll", getScroll)
    }, [])
    return (
        <>
            <div className={`wrapper ${checkScrollTop ? 'onScroll' : ''}`}>
                    <div className="logo" style={{backgroundImage: 'url(' + logo + ')'}}></div>
                    <div className="operation">
                        <div className="menu">
                            <ul>
                                {menu.map((tab, i) => <li key={i}>{tab}</li>)}
                            </ul>
                        </div>
                        <div className="secondry-menu">
                            <div className="search-wrapper">
                                <div className="search" onClick={filter}><i
                                    className="ri-search-line"></i></div>
                                <div ref={focusSearch} className={`hidden-real-search ${search ? 'real-search' : ''}`}>
                                    <div className="search-clone"><i className="ri-search-line"></i></div>
                                    <input ref={searchInput} className="search-input" type="text"
                                           placeholder="İçerik,kişi,tür"/>
                                </div>
                            </div>
                            <div className="notification"><i className="ri-notification-fill"></i></div>
                            <div className="user">Çocuk</div>
                            <div className="person-menu">
                                <img src={user} alt=""/>
                                <i className="ri-arrow-down-s-fill"></i>
                                <div className="person-menu-context">
                                    <i className="ri-arrow-up-s-fill"></i>
                                    <ul>
                                        {person_menu.map((menu, i) => {
                                            return menu.img ?
                                                <li key={i}><img src={user} alt=""/><span>{menu.text}</span></li> :
                                                <li key={i}><i className={menu.ico}></i><span>{menu.text}</span></li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Header