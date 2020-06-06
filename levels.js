(window.webpackJsonp = window.webpackJsonp || []).push([[20], {
    WHYy: function(a, t, e) {
        "use strict";
        e.d(t, "b", (function() {
            return n
        }
        )),
        e.d(t, "e", (function() {
            return s
        }
        )),
        e.d(t, "f", (function() {
            return i
        }
        )),
        e.d(t, "a", (function() {
            return o
        }
        )),
        e.d(t, "d", (function() {
            return r
        }
        )),
        e.d(t, "c", (function() {
            return l
        }
        ));
        var n = "Levels/FETCH_LEVELS"
          , s = "Levels/START_ELVEL"
          , i = "Levels/UNLOCK_LEVEL"
          , o = "active"
          , r = "playing"
          , l = "finish"
    },
    lJaf: function(a, t, e) {
        "use strict";
        var n = e("dfwq")
          , s = e("q1tI")
          , i = e.n(s)
          , o = e("TSYQ")
          , r = e.n(o)
          , l = e("Gycu")
          , c = e.n(l)
          , d = i.a.createElement
          , u = function(a) {
            var t = a.className
              , e = a.size;
            return d("div", {
                className: r()(c.a.stars, t)
            }, Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star1),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star2),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star3),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star4),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star5),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star6),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star7),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star8),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star9),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.starsize),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star11),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star12),
                    key: t
                })
            }
            )), Object(n.a)(Array(e)).map((function(a, t) {
                return d("div", {
                    className: r()(c.a.star, c.a.star13),
                    key: t
                })
            }
            )))
        };
        t.a = u,
        u.defaultProps = {
            size: 10
        }
    },
    mAlY: function(a, t, e) {
        "use strict";
        e.d(t, "a", (function() {
            return c
        }
        )),
        e.d(t, "b", (function() {
            return d
        }
        ));
        var n = e("eVuF")
          , s = e.n(n)
          , i = e("WHYy")
          , o = e("lQTw")
          , r = e("im35")
          , l = e("F2qU")
          , c = function() {
            return function(a, t) {
                return new s.a((function(e, n) {
                    var s = {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            Authorization: t().auth.token
                        }
                    };
                    Object(l.a)("levels/get?limit=20", s).then((function(t) {
                        t.success ? (e(),
                        a({
                            type: i.b,
                            payload: t.data
                        })) : n(t.errors)
                    }
                    )).catch((function(t) {
                        t.response.json().then((function(t) {
                            n(t.errors),
                            t.errors == o.l && a({
                                type: r.c,
                                payload: null
                            })
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }
          , d = function(a, t) {
            return function(e, n) {
                return new s.a((function(s, c) {
                    var d = n()
                      , u = {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            Authorization: d.auth.token
                        }
                    };
                    Object(l.a)("levels/".concat(a, "/start"), u).then((function(a) {
                        a.success ? (s(),
                        e({
                            type: i.e,
                            payload: d.levels.data[t]
                        })) : c(a.errors)
                    }
                    )).catch((function(a) {
                        a.response.json().then((function(a) {
                            c(a.errors),
                            a.errors == o.l && e({
                                type: r.c,
                                payload: null
                            })
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }
    },
    sf9l: function(a, t, e) {
        "use strict";
        e.r(t);
        var n = e("q1tI")
          , s = e.n(n)
          , i = e("p0XB")
          , o = e.n(i)
          , r = e("0iUn")
          , l = e("sLSF")
          , c = e("MI3g")
          , d = e("a7VT")
          , u = e("Tit0")
          , f = e("76ZC")
          , p = e.n(f)
          , h = e("nOHt")
          , v = e.n(h)
          , m = e("TSYQ")
          , g = e.n(m)
          , w = e("/MKj")
          , b = e("ANjH")
          , k = e("ZMKu")
          , y = e("RUMa")
          , j = e("RGH1")
          , O = e("B+OO")
          , x = e("ZqDi")
          , N = e("P0nq")
          , C = e("AT/M")
          , L = e("djf8")
          , M = e("6kA8")
          , A = e("v/+M")
          , _ = e("EheV")
          , B = e.n(_)
          , S = e("RIbv")
          , G = s.a.createElement
          , P = function(a) {
            function t(a) {
                var e;
                return Object(r.a)(this, t),
                (e = Object(c.a)(this, Object(d.a)(t).call(this, a))).state = {
                    isLoadingLogout: !1
                },
                e.onLogout = e.onLogout.bind(Object(C.a)(e)),
                e.onChangeRoute = e.onChangeRoute.bind(Object(C.a)(e)),
                e.onGetCoin = e.onGetCoin.bind(Object(C.a)(e)),
                e
            }
            return Object(u.a)(t, a),
            Object(l.a)(t, [{
                key: "onLogout",
                value: function() {
                    var a = this;
                    this.state.isLoadingLogout || (this.setState({
                        isLoadingLogout: !0
                    }),
                    this.props.logout().then((function() {
                        v.a.push(O.a.home.path, O.a.home.as),
                        a.props.closeModal(L.k)
                    }
                    )).catch((function() {
                        return a.setState({
                            isLoadingLogout: !1
                        })
                    }
                    )))
                }
            }, {
                key: "onChangeRoute",
                value: function(a) {
                    this.props.closeModal(L.k),
                    v.a.push(a.path, a.as)
                }
            }, {
                key: "onGetCoin",
                value: function() {
                    this.props.closeModal(L.k),
                    this.props.openModal(L.b)
                }
            }, {
                key: "render",
                value: function() {
                    var a = this
                      , t = this.props
                      , e = t.closeModal
                      , n = (t.openModal,
                    this.state.isLoadingLogout);
                    return G(A.f, {
                        isFull: !0,
                        className: B.a.modal,
                        wrapClass: B.a.modalWrap,
                        isCloseBg: !0,
                        onClose: function() {
                            return e(L.k)
                        }
                    }, G("div", null, G("div", {
                        className: B.a.row
                    }, G("div", {
                        className: B.a.col
                    }, G(M.a, {
                        isFull: !0,
                        onClick: function() {
                            return a.onChangeRoute(O.a.home)
                        }
                    }, "صفحه اول"))), G("div", {
                        className: B.a.row
                    }, G("div", {
                        className: B.a.col5
                    }, G(M.a, {
                        isFull: !0,
                        onClick: function() {
                            return a.onChangeRoute(O.a.rank)
                        }
                    }, "فهرست بهترین‌ها")), G("div", {
                        className: B.a.col5
                    }, G(M.a, {
                        isFull: !0,
                        onClick: function() {
                            return a.onChangeRoute(O.a.prize)
                        }
                    }, "جایزه‌ها"))), G("div", {
                        className: B.a.row
                    }, G("div", {
                        className: B.a.col5
                    }, G(M.a, {
                        isFull: !0,
                        onClick: this.onGetCoin
                    }, "دریافت چوق")), G("div", {
                        className: B.a.col5
                    }, G(M.a, {
                        isFull: !0,
                        onClick: function() {
                            return a.onChangeRoute(O.a.profile)
                        }
                    }, "پروفایل"))), G("div", {
                        className: B.a.row
                    }, G("div", {
                        className: B.a.col5
                    }, G(M.a, {
                        isFull: !0,
                        onClick: function() {
                            return a.onChangeRoute(O.a.rules)
                        }
                    }, "قوانین بازی")), G("div", {
                        className: B.a.col5
                    }, G(M.a, {
                        isFull: !0,
                        onClick: this.onLogout,
                        isLoading: n
                    }, "خروج از بازی"))), G("div", {
                        className: B.a.row
                    }, G("div", {
                        className: B.a.col
                    }, G(M.b, {
                        isFull: !0
                    }))), G("div", {
                        className: B.a.footer
                    }, G(M.a, {
                        shape: "circle",
                        isHeart: !0,
                        icon: S.a,
                        onClick: function() {
                            return e(L.k)
                        }
                    }))))
                }
            }]),
            t
        }(n.Component)
          , E = Object(w.b)((function(a) {
            return {}
        }
        ), (function(a) {
            return Object(b.b)({
                closeModal: y.b,
                openModal: y.c,
                logout: j.a
            }, a)
        }
        ))(P)
          , R = e("dfwq")
          , T = e("HGK5")
          , Z = e.n(T)
          , F = e("4BeY")
          , q = e.n(F)
          , U = e("IaFt")
          , V = e.n(U)
          , H = new q.a({
            id: "filimo",
            use: "filimo-usage",
            viewBox: "0 0 34.326 37.517",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.326 37.517" id="filimo">\n<path d="M187.728,31.3c.058.058.116.058.116.116a12.807,12.807,0,0,1,2.375,4.576,9.757,9.757,0,0,1,.347,2.606,14.937,14.937,0,0,1-.232,2.259,2.142,2.142,0,0,1-.29.637c-.174.174-.348.405-.521.579a14.817,14.817,0,0,1-1.506,1.158,52.466,52.466,0,0,1-4.46,2.838c-1.969,1.158-3.939,2.259-6.024,3.3-.753.348-1.448.7-2.259.985a4.893,4.893,0,0,1-.985.29,1.654,1.654,0,0,1-.753,0c-.521-.116-1.043-.348-1.564-.521-1.1-.463-2.2-1.043-3.3-1.622q-3.91-2.085-7.645-4.518a8.472,8.472,0,0,1-.753-.521c-.058-.058-.116-.058-.174-.174h.174c.174.058.348.174.521.232a12.213,12.213,0,0,0,2.838.811,14.09,14.09,0,0,0,2.2.174,9.693,9.693,0,0,0,3.823-.869c1.1-.521,2.259-1.043,3.359-1.622,2.2-1.158,4.4-2.375,6.545-3.649q2.867-1.651,5.56-3.475l1.39-1.043a4.289,4.289,0,0,0,.753-.7A2.206,2.206,0,0,0,187.843,32v-.348A.621.621,0,0,1,187.728,31.3Z" transform="translate(-156.761 -13.171)" fill="#f5853f" />\n<path d="M203.034,31.416l-.116-.116a2.509,2.509,0,0,0,.058.29v.348A1.723,1.723,0,0,1,202.4,33.1c-.232.232-.521.463-.753.7l-1.39,1.043c-1.332.927-2.664,1.8-4.054,2.606,6.719-1.216,8.746,1.622,9.325,3.417V40.8a9.974,9.974,0,0,0,.232-2.259,10.081,10.081,0,0,0-.348-2.606A13.052,13.052,0,0,0,203.034,31.416Z" transform="translate(-171.952 -13.171)" fill="#f47633" />\n<path d="M195.694,25.057a.213.213,0,0,1-.058-.174,4.824,4.824,0,0,0-.174-1.274,11.922,11.922,0,0,0-2.317-5.155,7.528,7.528,0,0,0-1.853-1.738c-.869-.579-1.738-1.216-2.664-1.8-2.2-1.39-4.4-2.722-6.661-4q-2.78-1.564-5.56-2.954c-.753-.348-1.448-.7-2.2-.985a7.027,7.027,0,0,0-.811-.29,1.786,1.786,0,0,0-1.1,0,1.12,1.12,0,0,0-.521.29.445.445,0,0,1-.174.116V6.986a11.952,11.952,0,0,1,3.823-5.271A9.954,9.954,0,0,1,178.434.151a1.677,1.677,0,0,1,.927,0,9.982,9.982,0,0,1,1.216.405q1.477.608,2.954,1.39a98.64,98.64,0,0,1,8.63,5.039c.7.463,1.332.927,1.969,1.39a5,5,0,0,1,.811.753,1.39,1.39,0,0,1,.405.7,9.072,9.072,0,0,1,.29,1.738,61.186,61.186,0,0,1,.29,6.545c0,1.564,0,3.07-.058,4.634-.058.753-.116,1.506-.116,2.259C195.694,24.941,195.694,25,195.694,25.057Z" transform="translate(-161.6 -0.036)" fill="#f99f3f" />\n<path d="M172.1,6.6a1.786,1.786,0,0,1,1.1,0,3.349,3.349,0,0,1,.811.29c.753.29,1.506.637,2.2.985,1.332.637,2.664,1.39,4,2.085C174.933,4.17,177.713.7,178.408,0a.213.213,0,0,0-.174.058,9.954,9.954,0,0,0-3.012,1.564A11.952,11.952,0,0,0,171.4,6.892v.116c.058-.058.116-.116.174-.116A2.348,2.348,0,0,1,172.1,6.6Z" transform="translate(-161.516 0)" fill="#f78e34" />\n<path d="M168.621,1.7c-.058.116-.116.116-.174.174A11.509,11.509,0,0,0,164.682,6.1a9.313,9.313,0,0,0-1.042,3.012c-.058.29-.058.579-.116.869-.116,1.564-.232,3.128-.29,4.691-.058,2.548-.116,5.1-.058,7.587,0,.869.058,1.68.058,2.548.058,1.1.116,2.2.232,3.3.058.579.116,1.216.232,1.8a4.268,4.268,0,0,0,.232.811l.348.521a1.2,1.2,0,0,0,.579.348c.058,0,.116.058.232.116a3.987,3.987,0,0,1-.753.116,11.16,11.16,0,0,1-1.39.058,12.479,12.479,0,0,1-3.591-.463,9.5,9.5,0,0,1-3.649-2.027l-.058-.058a2.084,2.084,0,0,1-.7-1.043,6.743,6.743,0,0,1-.232-1.043c-.116-1.043-.232-2.085-.29-3.128-.116-2.433-.116-4.923-.058-7.356a30.423,30.423,0,0,1,.174-3.243c.058-.753.116-1.448.232-2.2a6.065,6.065,0,0,1,.232-.985,1.5,1.5,0,0,1,.405-.637c.29-.29.637-.579.985-.869.869-.7,1.8-1.274,2.722-1.911,2.78-1.738,5.618-3.417,8.514-4.865.232-.116.463-.232.753-.348Z" transform="translate(-154.334 -0.715)" fill="#fec23b" />\n<path d="M165.288,46.246a4.065,4.065,0,0,1-.348-.521,3.322,3.322,0,0,1-.232-.811,16.846,16.846,0,0,1-.232-1.8c-.116-1.1-.174-2.2-.232-3.3-.058-.753-.058-1.564-.058-2.317-.637,2.027-2.9,7.645-7.587,6.661.058.058.116.116.174.116l.058.058a9.417,9.417,0,0,0,3.649,2.027,10.748,10.748,0,0,0,3.591.463c.463,0,.927-.058,1.39-.058a3.987,3.987,0,0,0,.753-.116c-.116-.058-.174-.058-.232-.116A.868.868,0,0,1,165.288,46.246Z" transform="translate(-155.288 -15.78)" fill="#fbad30" />\n</symbol>'
        })
          , I = (V.a.add(H),
        s.a.createElement)
          , W = function(a) {
            function t(a) {
                return Object(r.a)(this, t),
                Object(c.a)(this, Object(d.a)(t).call(this, a))
            }
            return Object(u.a)(t, a),
            Object(l.a)(t, [{
                key: "render",
                value: function() {
                    var a = this;
                    return I("div", {
                        className: Z.a.footerWrap
                    }, Object(R.a)(Array(8)).map((function(a, t) {
                        return I("div", {
                            className: Z.a.wave,
                            key: t
                        })
                    }
                    )), I(M.a, {
                        color: "white",
                        size: "md",
                        onClick: function() {
                            return a.props.openModal(L.k)
                        }
                    }, "منوی بازی"))
                }
            }]),
            t
        }(n.Component)
          , z = Object(w.b)((function(a) {
            return {}
        }
        ), (function(a) {
            return Object(b.b)({
                openModal: y.c
            }, a)
        }
        ))(W)
          , Y = e("G+5c")
          , D = e.n(Y)
          , K = e("TkHV")
          , J = e("WRl2")
          , Q = e("CD0P")
          , X = e("ZI6C")
          , $ = e("6tTL")
          , aa = new q.a({
            id: "star-two",
            use: "star-two-usage",
            viewBox: "0 0 33.853 50.852",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.853 50.852" id="star-two">\n<defs>\n  <linearGradient id="star-two_stars2-grad" x1="0.162" y1="0.148" x2="0.625" y2="0.733" gradientUnits="objectBoundingBox">\n\t<stop offset="0" stop-color="#fec23b" />\n\t<stop offset="1" stop-color="#f9903f" />\n  </linearGradient>\n  <linearGradient id="star-two_stars2-grad-2" x1="-0.069" y1="-0.202" x2="1" y2="0.839" gradientUnits="objectBoundingBox">\n\t<stop offset="0" stop-color="#fff" />\n\t<stop offset="1" stop-color="#fff" stop-opacity="0.051" />\n  </linearGradient>\n</defs>\n<g transform="translate(-67.937 -17.913)">\n  <path d="M256.947,83.486l7.127-.093a2.647,2.647,0,0,1,2.19,1.116l2.4,3.392,1.717,2.429a2.64,2.64,0,0,0,4.676-.742l2.117-6.806a2.636,2.636,0,0,1,1.737-1.737l6.808-2.117a2.639,2.639,0,0,0,.74-4.676l-5.819-4.116a2.634,2.634,0,0,1-1.116-2.189l.091-7.127a2.641,2.641,0,0,0-4.219-2.151l-4.672,3.486-1.04.778a2.634,2.634,0,0,1-2.426.384l-6.751-2.29a2.64,2.64,0,0,0-3.347,3.349l2.288,6.749a2.642,2.642,0,0,1-.383,2.427L254.8,79.266A2.64,2.64,0,0,0,256.947,83.486Z" transform="translate(-185.784 -22.68)" fill="url(#star-two_stars2-grad)" />\n  <path d="M328.587,97.674l7.127-.093a2.648,2.648,0,0,1,2.191,1.116l2.4,3.392a16.478,16.478,0,0,0,2.058-25.745l-1.04.778a2.635,2.635,0,0,1-2.426.384l-6.751-2.29a2.64,2.64,0,0,0-3.347,3.349l2.288,6.749a2.641,2.641,0,0,1-.383,2.427l-4.264,5.713A2.64,2.64,0,0,0,328.587,97.674Z" transform="translate(-257.425 -36.868)" opacity="0.604" fill="url(#star-two_stars2-grad-2)" />\n  <path id="star-two_Path_4086-2" data-name="Path 4086" d="M255.784,72.479l4.032-.052a1.5,1.5,0,0,1,1.239.631l1.357,1.919.971,1.374a1.494,1.494,0,0,0,2.645-.42l1.2-3.85a1.492,1.492,0,0,1,.983-.983l3.851-1.2a1.493,1.493,0,0,0,.419-2.645l-3.292-2.329a1.49,1.49,0,0,1-.631-1.238l.052-4.032a1.494,1.494,0,0,0-2.387-1.217l-2.643,1.972-.589.44a1.49,1.49,0,0,1-1.372.217l-3.819-1.3a1.494,1.494,0,0,0-1.894,1.895l1.294,3.818a1.494,1.494,0,0,1-.216,1.373l-2.412,3.232A1.494,1.494,0,0,0,255.784,72.479Z" transform="matrix(0.978, -0.208, 0.208, 0.978, -192.864, 17.826)" fill="url(#star-two_stars2-grad)" />\n  <path d="M327.424,87.859l4.032-.052a1.5,1.5,0,0,1,1.239.631l1.357,1.919a9.322,9.322,0,0,0,1.164-14.564l-.589.44a1.49,1.49,0,0,1-1.372.218l-3.819-1.3a1.494,1.494,0,0,0-1.894,1.895l1.294,3.818a1.494,1.494,0,0,1-.217,1.373l-2.412,3.232A1.494,1.494,0,0,0,327.424,87.859Z" transform="matrix(0.978, -0.208, 0.208, 0.978, -266.136, 17.677)" opacity="0.492" fill="url(#star-two_stars2-grad-2)" />\n</g>\n</symbol>'
        })
          , ta = (V.a.add(aa),
        aa)
          , ea = s.a.createElement
          , na = function(a) {
            function t(a) {
                var e;
                return Object(r.a)(this, t),
                (e = Object(c.a)(this, Object(d.a)(t).call(this, a))).state = {
                    isLoading: !1
                },
                e
            }
            return Object(u.a)(t, a),
            Object(l.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    this.getUserStatus()
                }
            }, {
                key: "getUserStatus",
                value: function() {
                    var a = this
                      , t = this.props
                      , e = t.isStateFetch
                      , n = t.token;
                    !e && n && (this.setState({
                        isLoading: !0
                    }),
                    this.props.fetchState().then((function(t) {
                        t > 0 && a.props.openModal(L.o, {
                            coins: t
                        })
                    }
                    )).catch().finally((function() {
                        return a.setState({
                            isLoading: !1
                        })
                    }
                    )))
                }
            }, {
                key: "render",
                value: function() {
                    var a = this.state.isLoading
                      , t = this.props
                      , e = t.points
                      , n = t.coins;
                    return ea("div", {
                        className: D.a.infoWrap
                    }, ea("div", {
                        className: D.a.info
                    }, ea("div", {
                        className: D.a.coinWrap
                    }, ea("div", {
                        className: D.a.coin
                    }, ea("div", {
                        className: D.a.coinIcon
                    }, ea(X.a, $.a)), ea("div", {
                        className: D.a.coinBody
                    }, ea("var", null, a ? ea(J.a, {
                        centerAbs: !0,
                        size: "xxs",
                        color: "orange"
                    }) : Object(K.i)(n)), ea("span", null, "چوق")))), ea("div", {
                        className: D.a.scoreWrap
                    }, ea("div", {
                        className: D.a.score
                    }, ea("div", {
                        className: D.a.scoreBody
                    }, ea("var", null, a ? ea(J.a, {
                        centerAbs: !0,
                        size: "xxs",
                        color: "orange"
                    }) : Object(K.i)(e)), ea("span", null, "امتیاز")), ea("div", {
                        className: D.a.scoreIcon
                    }, ea(X.a, ta))))))
                }
            }]),
            t
        }(n.Component)
          , sa = Object(w.b)((function(a) {
            return {
                isStateFetch: a.profile.isFetch,
                token: a.auth.token,
                points: a.profile.data.points,
                coins: a.profile.data.coins
            }
        }
        ), (function(a) {
            return Object(b.b)({
                fetchState: Q.a,
                openModal: y.c
            }, a)
        }
        ))(na)
          , ia = e("vYYK")
          , oa = e("kOwS")
          , ra = e("thk6")
          , la = (e("p6Nx"),
        e("SGGE"))
          , ca = e.n(la)
          , da = new q.a({
            id: "lock",
            use: "lock-usage",
            viewBox: "0 0 21 28.423",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 28.423" id="lock">\n  <defs>\n    <linearGradient id="lock_linear-gradient" x1="0.5" x2="0.5" y2="1.811" gradientUnits="objectBoundingBox">\n      <stop offset="0" stop-color="#fff" />\n      <stop offset="1" stop-color="#ffc293" />\n    </linearGradient>\n    <linearGradient id="lock_linear-gradient-2" x1="0.186" x2="0.67" y2="1.447" gradientUnits="objectBoundingBox">\n      <stop offset="0" stop-color="#fff" />\n      <stop offset="1" stop-color="#ffcda6" />\n    </linearGradient>\n  </defs>\n  <g id="lock_Group_16054" data-name="Group 16054" transform="translate(-166.369 -493.974)">\n    <path id="lock_Path_26444" data-name="Path 26444" d="M83.119,11.872h0V7.8a7.8,7.8,0,1,0-15.605,0v4.067Zm-2.561,0h-10.4V7.8a5.421,5.421,0,0,1,5.16-5.33A5.493,5.493,0,0,1,80.558,7.8Z" transform="translate(101.639 493.974)" fill="url(#lock_linear-gradient)" />\n    <rect id="lock_Rectangle_6340" data-name="Rectangle 6340" width="21" height="17" rx="4" transform="translate(166.369 505.397)" fill="url(#lock_linear-gradient-2)" />\n    <rect id="lock_Rectangle_6341" data-name="Rectangle 6341" width="3" height="6" rx="1.5" transform="translate(175.369 511.397)" fill="#9c4c0f" />\n  </g>\n</symbol>'
        })
          , ua = (V.a.add(da),
        da)
          , fa = new q.a({
            id: "clock",
            use: "clock-usage",
            viewBox: "0 0 38 38",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 38" id="clock">\n  <defs>\n    <linearGradient id="clock_linear-gradient" x1="0.25" y1="0.103" x2="0.721" y2="0.933" gradientUnits="objectBoundingBox">\n      <stop offset="0" stop-color="#ffca70" />\n      <stop offset="1" stop-color="#ff7912" />\n    </linearGradient>\n  </defs>\n  <g id="clock_Group_16053" data-name="Group 16053" transform="translate(-209.805 -534.805)">\n    <circle id="clock_Ellipse_1703" data-name="Ellipse 1703" cx="19" cy="19" r="19" transform="translate(209.805 534.805)" fill="url(#clock_linear-gradient)" />\n    <path id="clock_Path_26472" data-name="Path 26472" d="M-15029.338-2249.023v11.66l7.646,4.821" transform="translate(15258.262 2792.588)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />\n  </g>\n</symbol>'
        })
          , pa = (V.a.add(fa),
        fa)
          , ha = new q.a({
            id: "tick",
            use: "tick-usage",
            viewBox: "0 0 25.579 25.579",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.579 25.579" id="tick">\n  <path id="tick_Path_27955" data-name="Path 27955" stroke="#fff" d="M0,16.412H9.66L9.738,0" fill="none" transform="translate(15.141 3.544) rotate(45)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" opacity="0.9" />\n</symbol>'
        })
          , va = (V.a.add(ha),
        ha)
          , ma = e("WHYy")
          , ga = e("mAlY")
          , wa = s.a.createElement
          , ba = function(a) {
            function t(a) {
                var e;
                return Object(r.a)(this, t),
                (e = Object(c.a)(this, Object(d.a)(t).call(this, a))).state = {
                    isLoading: !1
                },
                e.onClick = e.onClick.bind(Object(C.a)(e)),
                e
            }
            return Object(u.a)(t, a),
            Object(l.a)(t, [{
                key: "onClick",
                value: function() {
                    var a = this.props;
                    a.status,
                    a.id,
                    this.props.openModal(L.f)
                }
            }, {
                key: "onStartLevel",
                value: function() {
                    var a = this
                      , t = this.props
                      , e = t.id
                      , n = t.index;
                    this.state.isLoading || (this.setState({
                        isLoading: !0
                    }),
                    this.props.startLevel(e, n).then((function() {
                        return v.a.push("".concat(O.a.level.path), "".concat(O.a.level.as, "/").concat(e))
                    }
                    )).finally((function() {
                        return a.setState({
                            isLoading: !1
                        })
                    }
                    )))
                }
            }, {
                key: "render",
                value: function() {
                    var a = this.props
                      , t = a.status
                      , e = a.poster
                      , n = (a.index,
                    a.unlock)
                      , s = a.is_released
                      , i = (a.level,
                    a.name)
                      , o = this.state.isLoading
                      , r = t == ma.c
                      , l = t == ma.a || t == ma.d
                      , c = null === t && !1 === n && s
                      , d = null === t && !1 === s;
                    return wa("div", {
                        className: g()(ca.a.slide, Object(ia.a)({}, "".concat(ca.a.pointer), l))
                    }, wa("div", {
                        className: ca.a.poster,
                        style: {
                            backgroundImage: "url(".concat(e, ")")
                        }
                    }), wa("h3", {
                        className: ca.a.levelTitle
                    }, i), wa("div", {
                        className: ca.a.btnWrap
                    }, l && wa(M.a, {
                        onClick: this.onClick,
                        className: ca.a.btnStart,
                        size: "md",
                        isLoading: o
                    }, "ورود به بازی"), c && wa("div", {
                        className: ca.a.lock
                    }, wa(X.a, ua)), d && wa("div", {
                        className: ca.a.soon
                    }, wa(X.a, pa), wa("span", null, "بزودی")), r && wa("div", {
                        className: ca.a.finish
                    }, wa(X.a, va))))
                }
            }]),
            t
        }(n.Component)
          , ka = Object(w.b)((function(a) {
            return {
                levels: a.levels.data
            }
        }
        ), (function(a) {
            return Object(b.b)({
                startLevel: ga.b,
                openModal: y.c
            }, a)
        }
        ))(ba)
          , ya = e("UpY3")
          , ja = e.n(ya)
          , Oa = s.a.createElement
          , xa = function(a) {
            function t(a) {
                var e;
                return Object(r.a)(this, t),
                (e = Object(c.a)(this, Object(d.a)(t).call(this, a))).state = {
                    paginationHide: !1,
                    is2Slides: !1,
                    is4slides: !1
                },
                e.swiper = null,
                e.swiperOptions = e.swiperOptions.bind(Object(C.a)(e)),
                e.addBulletClass = e.addBulletClass.bind(Object(C.a)(e)),
                e
            }
            return Object(u.a)(t, a),
            Object(l.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    this.swiper = new ra.a(this.container,this.swiperOptions()),
                    this.swiper.on("slideChange", this.addBulletClass),
                    this.swiper.on("resize", this.addBulletClass),
                    this.moveSwiper(),
                    this.addBulletClass()
                }
            }, {
                key: "moveSwiper",
                value: function() {
                    var a = this.props
                      , t = a.levelId
                      , e = a.levels;
                    if (t) {
                        var n = e.findIndex((function(a) {
                            return a.id == t
                        }
                        ));
                        this.swiper.slideTo(n)
                    }
                }
            }, {
                key: "swiperOptions",
                value: function() {
                    var a = this.props.levels.length
                      , t = !1
                      , e = 1;
                    return a <= 2 ? this.setState({
                        is2Slides: !0
                    }) : a >= 3 && a < 4 ? this.setState({
                        paginationHide: !0
                    }) : a >= 4 && a < 5 ? this.setState({
                        is4slides: !0
                    }) : a >= 5 && (t = !0,
                    e = 3),
                    {
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0,
                            dynamicBullets: t,
                            dynamicMainBullets: e
                        },
                        breakpoints: {
                            500: {
                                slidesPerView: 2
                            },
                            800: {
                                slidesPerView: 3
                            }
                        }
                    }
                }
            }, {
                key: "addBulletClass",
                value: function() {
                    for (var a, t, e = this.swiper.pagination.bullets, n = 0; n < e.length; n++)
                        (t = (a = e[n]).className.split(" ")).includes("swiper-pagination-bullet-active") ? Object(K.a)(a, ja.a.bulletActiveClass) : Object(K.k)(a, ja.a.bulletActiveClass),
                        t.includes("swiper-pagination-bullet-active-main") ? Object(K.a)(a, ja.a.bulletActiveMainClass) : Object(K.k)(a, ja.a.bulletActiveMainClass),
                        t.includes("swiper-pagination-bullet-active-next") || t.includes("swiper-pagination-bullet-active-prev") ? Object(K.a)(a, ja.a.bulletActiveNextOrPrevClass) : Object(K.k)(a, ja.a.bulletActiveNextOrPrevClass)
                }
            }, {
                key: "render",
                value: function() {
                    var a, t = this, e = this.state, n = e.paginationHide, i = e.is4slides, o = e.is2Slides;
                    return Oa(s.a.Fragment, null, Oa("div", {
                        dir: "ltr",
                        className: g()("swiper-container", ja.a.container),
                        ref: function(a) {
                            return t.container = a
                        }
                    }, Oa("div", {
                        className: g()("swiper-wrapper", ja.a.swiperWrapper)
                    }, this.props.levels.map((function(a, t) {
                        return Oa("div", {
                            className: g()("swiper-slide", ja.a.swiperSlide),
                            key: a.id
                        }, Oa(ka, Object(oa.a)({
                            index: t,
                            level: a
                        }, a)))
                    }
                    ))), Oa("div", {
                        className: g()("swiper-pagination", ja.a.swiperPagination, (a = {},
                        Object(ia.a)(a, "".concat(ja.a.hidePagination), n),
                        Object(ia.a)(a, "".concat(ja.a.slides2), o),
                        Object(ia.a)(a, "".concat(ja.a.slides4), i),
                        a))
                    })))
                }
            }]),
            t
        }(n.Component)
          , Na = Object(w.b)((function(a) {
            return {
                levels: a.levels.data,
                levelId: a.level.levelId
            }
        }
        ), (function(a) {
            return Object(b.b)({}, a)
        }
        ))(xa)
          , Ca = e("vMYX")
          , La = e("lQTw")
          , Ma = e("MwoK")
          , Aa = e("lJaf")
          , _a = e("Du5V")
          , Ba = e.n(_a)
          , Sa = s.a.createElement
          , Ga = function(a) {
            function t(a) {
                var e;
                return Object(r.a)(this, t),
                (e = Object(c.a)(this, Object(d.a)(t).call(this, a))).state = {
                    isLoading: !1
                },
                e
            }
            return Object(u.a)(t, a),
            Object(l.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var a = this.props
                      , t = a.token
                      , e = a.query;
                    t ? (this.getLevels(),
                    this.fetchMissionsData()) : e.token ? this.verifyToken() : v.a.push(O.a.home.path, O.a.home.as)
                }
            }, {
                key: "fetchMissionsData",
                value: function() {
                    this.props.isMissionsFetch || this.props.fetchMissions()
                }
            }, {
                key: "verifyToken",
                value: function() {
                    var a = this
                      , t = this.props.query
                      , e = t.token
                      , n = t.filimo_id;
                    this.setState({
                        isLoading: !0
                    }),
                    this.props.verifyToken(e, n).then((function() {
                        a.setState({
                            isLoading: !1
                        }),
                        v.a.replace(O.a.levels.path, O.a.levels.as),
                        a.getLevels(),
                        a.fetchMissionsData()
                    }
                    )).catch((function(a) {
                        o()(a) && a[0] == La.k && v.a.push(O.a.home.path, O.a.home.as)
                    }
                    ))
                }
            }, {
                key: "getLevels",
                value: function() {
                    var a = this;
                    this.setState({
                        isLoading: !0
                    }),
                    this.props.fetchLevels().then((function() {
                        return a.setState({
                            isLoading: !1
                        })
                    }
                    )).catch((function() {
                        return v.a.push(O.a.home.path, O.a.home.as)
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var a = this.state.isLoading
                      , t = this.props.modals;
                    return Sa(x.a, null, Sa("div", {
                        className: Ba.a.wrap
                    }, Sa(sa, null), a ? Sa("div", {
                        className: Ba.a.loading
                    }, Sa(J.a, {
                        centerAbs: !0
                    })) : Sa("div", {
                        className: Ba.a.slider
                    }, Sa(Na, null), Sa(Aa.a, {
                        size: 4,
                        className: Ba.a.stars
                    }), Sa("div", {
                        className: g()(Ba.a.svg, Ba.a.moon)
                    }, p()('<svg xmlns="http://www.w3.org/2000/svg" width="49.311" height="53.422" viewBox="0 0 49.311 53.422">\n<path id="moon" d="M16924.131,913a26.63,26.63,0,0,1-10.561-2.163,27.008,27.008,0,0,1-8.621-5.9,27.714,27.714,0,0,1,2.771-41.379,26.909,26.909,0,0,1,7.211-3.983,26.516,26.516,0,0,0,18.141,45.414,25.749,25.749,0,0,0,13.24-3.661,27.518,27.518,0,0,1-9.494,8.481,26.733,26.733,0,0,1-12.687,3.187Z" transform="translate(-16897.002 -859.578)" fill="#d7d7f8"/>\n</svg>\n')), Sa("div", {
                        className: g()(Ba.a.svg, Ba.a.cloudLeft)
                    }, p()('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="82.222" height="18.466" viewBox="0 0 82.222 18.466">\n<defs>\n  <linearGradient id="cloudLeftlinear-gradient" x1="0.589" x2="0.576" y2="1" gradientUnits="objectBoundingBox">\n    <stop offset="0" stop-color="#4a4c9f"/>\n    <stop offset="1" stop-color="#38377a" stop-opacity="0"/>\n  </linearGradient>\n</defs>\n<g id="cloudLeft" transform="translate(-21.923 -7.316)" style="isolation: isolate">\n  <path id="Union_119" data-name="Union 119" d="M55.333,18.463v0C35.5,18.466,13.886,18.46,0,18.46a29.874,29.874,0,0,1,50.742-7.487A19.962,19.962,0,0,1,63.788,6.141,20.215,20.215,0,0,1,82.222,18.466C73.135,18.466,63.488,18.464,55.333,18.463Z" transform="translate(21.923 7.316)" fill="url(#cloudLeftlinear-gradient)"/>\n</g>\n</svg>\n')), Sa("div", {
                        className: g()(Ba.a.svg, Ba.a.cloudCenter)
                    }, p()('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51.215" height="12.407" viewBox="0 0 51.215 12.407">\n<defs>\n  <linearGradient id="cloudCenterlinear-gradient" x1="0.521" y1="0.708" x2="0.519" gradientUnits="objectBoundingBox">\n    <stop offset="0" stop-color="#4a4c9f"/>\n    <stop offset="1" stop-color="#38377a" stop-opacity="0"/>\n  </linearGradient>\n</defs>\n<g id="cloudCenter" transform="translate(0 0)" style="isolation: isolate">\n  <path id="Path_26092" data-name="Path 26092" d="M18.622,12.407A20.35,20.35,0,0,0,37.18,0C23.854,0,9.331,0,0,0A20.191,20.191,0,0,0,18.622,12.407Z" transform="translate(51.215 12.407) rotate(180)" fill="url(#cloudCenterlinear-gradient)"/>\n  <path id="Path_26093" data-name="Path 26093" d="M12.429,8.281A13.583,13.583,0,0,0,24.816,0L0,0A13.477,13.477,0,0,0,12.429,8.281Z" transform="translate(24.816 12.407) rotate(180)" fill="url(#cloudCenterlinear-gradient)"/>\n</g>\n</svg>\n')), Sa("div", {
                        className: g()(Ba.a.svg, Ba.a.cloudRight)
                    }, p()('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120.077" height="37.582" viewBox="0 0 120.077 37.582">\n<defs>\n  <linearGradient id="cloudRightlinear-gradient" x1="0.529" y1="1" x2="0.534" y2="0.077" gradientUnits="objectBoundingBox">\n    <stop offset="0" stop-color="#4a4c9f"/>\n    <stop offset="1" stop-color="#38377a" stop-opacity="0"/>\n  </linearGradient>\n  <linearGradient id="cloudRightlinear-gradient-2" x1="0.521" y1="0.708" x2="0.519" y2="0" xlink:href="#cloudRightlinear-gradient"/>\n</defs>\n<g id="cloudRight" transform="translate(-597.326 -210)">\n  <path id="Path_26092" data-name="Path 26092" d="M50.221,37.582c22.407,0,41.654-15.712,50.048-37.582C64.331,0,25.163.012,0,.012,8.206,22.053,27.6,37.582,50.221,37.582Z" transform="translate(717.402 247.582) rotate(180)" fill="url(#cloudRightlinear-gradient)"/>\n  <path id="Path_28199" data-name="Path 28199" d="M26.981,17.976A29.484,29.484,0,0,0,53.868,0C34.561,0,13.518.006,0,.006A29.254,29.254,0,0,0,26.981,17.976Z" transform="translate(651.193 241.582) rotate(180)" opacity="0.6" fill="url(#cloudRightlinear-gradient-2)"/>\n</g>\n</svg>\n'))), Sa(z, null)), Sa(k.a, null, Object(Ca.a)(t, L.k) && Sa(E, {
                        key: "Menu"
                    })), Sa(Ma.a, null))
                }
            }]),
            t
        }(n.Component)
          , Pa = Object(w.b)((function(a) {
            return {
                token: a.auth.token,
                new_user: a.auth.new_user,
                levels: a.levels,
                modals: a.app.modals.list,
                isMissionsFetch: a.missions.isFetch
            }
        }
        ), (function(a) {
            return Object(b.b)({
                verifyToken: j.c,
                fetchLevels: ga.a,
                fetchMissions: N.a,
                logout: j.a
            }, a)
        }
        ))(Ga)
          , Ea = s.a.createElement
          , Ra = function(a) {
            var t = a.query;
            return Ea(Pa, {
                query: t
            })
        };
        Ra.getInitialProps = function(a) {
            return {
                query: a.query
            }
        }
        ,
        t.default = Ra
    },
    vEVW: function(a, t, e) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/levels", function() {
            return e("sf9l")
        }
        ])
    }
}, [["vEVW", 1, 2, 3, 7, 0, 4, 5, 6, 9, 10, 11, 8]]]);
