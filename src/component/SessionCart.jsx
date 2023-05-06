import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSessionData } from "../actions/patient";
import "../styles/SessionCart.css";

function SessionCart() {
    const session = useSelector((state) => state.patient.oneSession);
    const title = useSelector((state) => state.form.stepsTitleSes);
    const isLoading = useSelector((state) => state.patient.isLoadSession);
    let { idName } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSessionData(idName));
    }, [dispatch, idName]);

    return isLoading ? (
        <div className="wrapper-block container">
            <h2 className="title">Карточка пациента</h2>
            <div className="inner-block">
                <h4>{title[0]}</h4>
                <hr />
                <div className="row">
                    <div className="col session-wrap placeholder-wave">
                        <h6>
                            <span
                                style={{ width: 100 }}
                                className="placeholder col-4"
                            ></span>
                        </h6>
                        <div className="text-session">
                            <span
                                style={{ width: 80 }}
                                className="placeholder col-4"
                            ></span>
                        </div>
                    </div>
                </div>
                <hr />
                <h4>{title[1]}</h4>
                <hr />
                <div className="row">
                    <div className="col session-wrap placeholder-wave">
                        <h6>
                            <span
                                style={{ width: 100 }}
                                className="placeholder col-4"
                            ></span>
                        </h6>
                        <div className="text-session">
                            <span
                                style={{ width: 180 }}
                                className="placeholder col-4"
                            ></span>
                        </div>
                    </div>
                </div>
                <hr />
                <h4>{title[2]}</h4>
                <hr />
                <div className="row">
                    <div className="col session-wrap placeholder-wave">
                        <h6>
                            <span
                                style={{ width: 100 }}
                                className="placeholder col-4"
                            ></span>
                        </h6>
                        <div className="text-session">
                            <span
                                style={{ width: 120 }}
                                className="placeholder col-4"
                            ></span>
                        </div>
                    </div>
                </div>
                <hr />
                <h4>{title[3]}</h4>
                <hr />
                <div className="row">
                    <div className="col session-wrap placeholder-wave">
                        <h6>
                            <span
                                style={{ width: 100 }}
                                className="placeholder col-4"
                            ></span>
                        </h6>
                        <div className="text-session">
                            <span
                                style={{ width: 200 }}
                                className="placeholder col-4"
                            ></span>
                        </div>
                    </div>
                </div>
                <hr />
                <h4>{title[4]}</h4>
                <hr />
                <div className="row">
                    <div className="col session-wrap placeholder-wave">
                        <h6>
                            <span
                                style={{ width: 100 }}
                                className="placeholder col-4"
                            ></span>
                        </h6>
                        <div className="text-session">
                            <span
                                style={{ width: 150 }}
                                className="placeholder col-4"
                            ></span>
                        </div>
                    </div>
                </div>
                <hr />
                <h4>{title[5]}</h4>
                <hr />
                <div className="row">
                    <div className="col session-wrap placeholder-wave">
                        <h6>
                            <span
                                style={{ width: 100 }}
                                className="placeholder col-4"
                            ></span>
                        </h6>
                        <div className="text-session">
                            <span
                                style={{ width: 100 }}
                                className="placeholder col-4"
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="wrapper-block container">
            <h2 className="title">Карточка сессии</h2>
            <div className="inner-block">
                <h4>{title[0]}</h4>
                <hr />
                {session.dateIn && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Дата приема:</h6>
                            <div className="text-session">
                                {session.dateIn
                                    .substring(0, 16)
                                    .replace(/T/, " ")}
                            </div>
                        </div>
                    </div>
                )}
                {session.dateOut && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Дата приема:</h6>
                            <div className="text-session">
                                {session.dateOut
                                    .substring(0, 16)
                                    .replace(/T/, " ")}
                            </div>
                        </div>
                    </div>
                )}
                {session.escortWith ? (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>В сопровождении:</h6>
                            <div className="text-session">
                                {session.escortWith}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>В сопровождении:</h6>
                            <div className="text-session">{session.escort}</div>
                        </div>
                    </div>
                )}
                {session.incomeState && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Поступил в состоянии:</h6>
                            <div className="text-session">
                                {session.incomeState}
                            </div>
                        </div>
                    </div>
                )}
                {session.complaints && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Поступил в состоянии:</h6>
                            <div className="text-session">
                                {session.complaints}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisLife.partDesease && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Перенесенные заболевания:</h6>
                            <div className="text-session">
                                {session.anamnesisLife.partDesease}
                            </div>
                        </div>
                    </div>
                )}
                <hr />
                <h4>{title[1]}</h4>
                <hr />
                {session.anamnesisDisease.pavIntake && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Систематический прием алкоголя, других ПАВ:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.pavIntake}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.abstinent.psych ||
                session.anamnesisDisease.patalogic.stream ? (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Проявление абстинентного синдрома</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.abstinent.psych}
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
                {session.anamnesisDisease.abstinent.somat && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Cоматическими нарушениями:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.abstinent.somat}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.abstinent.psych && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Психические нарушения:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.abstinent.psych}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.patalogic.stream && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Паталогическое влечение имеет:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.patalogic.stream}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.patalogic.fight && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Происходит:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.patalogic.fight}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.control && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Ситуационный контроль утрачен:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.control}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.palimp && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Палимпсесты:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.palimp}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.amnesia && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Тотальная амнезия:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.amnesia}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.typeAlco && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Тип опьянения:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.typeAlco}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.typeAlco && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Тип опьянения:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.typeAlco}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.tolerant && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Толерантность:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.tolerant}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.maxTolerant && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Макс-ая суточная толерантность:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.maxTolerant}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.typeLiquid && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Вид напитка:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.typeLiquid}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.zapoi && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Длительность запоев:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.zapoi}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.lightTimeline && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Светлые промежутки:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.lightTimeline}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.lastZapoi && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Длительность последнего запоя:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.lastZapoi}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.lastRemiss && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Длительность последней ремиссии:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.lastRemiss}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.lastMedicine && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Последнее лечение:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.lastMedicine}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.lastAlcoIncome && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Последний прием алкоголя:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.lastAlcoIncome}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.doseAlco && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>В какой дозе:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.doseAlco}
                            </div>
                        </div>
                    </div>
                )}
                {session.anamnesisDisease.additionalInfo && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Доп-ая информация:</h6>
                            <div className="text-session">
                                {session.anamnesisDisease.additionalInfo}
                            </div>
                        </div>
                    </div>
                )}
                <hr />
                <h4>{title[2]}</h4>
                <hr />
                {session.somatStatus.condition && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Общее состояние:</h6>
                            <div className="text-session">
                                {session.somatStatus.condition}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.nutrition && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Питание:</h6>
                            <div className="text-session">
                                {session.somatStatus.nutrition}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.skin.color && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Цвет кожных покровов:</h6>
                            <div className="text-session">
                                {session.somatStatus.skin.color}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.skin.humidity && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Влажность кожных покровов:</h6>
                            <div className="text-session">
                                {session.somatStatus.skin.humidity}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.scars && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Наличие шрамов, ушибов, ссадин:</h6>
                            <div className="text-session">
                                {session.somatStatus.scars}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.eyeState && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Состояние конъюктивы:</h6>
                            <div className="text-session">
                                {session.somatStatus.eyeState}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.breathe && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Дыхание:</h6>
                            <div className="text-session">
                                {session.somatStatus.breathe}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.wheezing && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Хрипы:</h6>
                            <div className="text-session">
                                {session.somatStatus.wheezing}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.saturation && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Сатурация:</h6>
                            <div className="text-session">
                                {session.somatStatus.saturation}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.tonesHeart && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Тоны сердца:</h6>
                            <div className="text-session">
                                {session.somatStatus.tonesHeart}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.antPressure && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Артериальное давление:</h6>
                            <div className="text-session">
                                {session.somatStatus.antPressure}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.pulse && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Частота пульса:</h6>
                            <div className="text-session">
                                {session.somatStatus.pulse}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.fill && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Наполнение:</h6>
                            <div className="text-session">
                                {session.somatStatus.fill}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.deficite && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Дефицит:</h6>
                            <div className="text-session">
                                {session.somatStatus.deficite}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.tongue && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Язык:</h6>
                            <div className="text-session">
                                {session.somatStatus.tongue}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.stomach && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Живот:</h6>
                            <div className="text-session">
                                {session.somatStatus.stomach}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.liver && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Печень:</h6>
                            <div className="text-session">
                                {session.somatStatus.liver}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.vomit && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Рвота, тошнота:</h6>
                            <div className="text-session">
                                {session.somatStatus.vomit}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.diarrhea && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Стул:</h6>
                            <div className="text-session">
                                {session.somatStatus.diarrhea}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.edema && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Отеки:</h6>
                            <div className="text-session">
                                {session.somatStatus.edema}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.glucose && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Глюкоза в крови:</h6>
                            <div className="text-session">
                                {session.somatStatus.glucose}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.bonesLink && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Костно-суставной аппарат:</h6>
                            <div className="text-session">
                                {session.somatStatus.bonesLink}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.periferState && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>
                                Состояние перифирической сосудистой системы:
                            </h6>
                            <div className="text-session">
                                {session.somatStatus.periferState}
                            </div>
                        </div>
                    </div>
                )}
                {session.somatStatus.additionalInfo && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Дополнения:</h6>
                            <div className="text-session">
                                {session.somatStatus.additionalInfo}
                            </div>
                        </div>
                    </div>
                )}
                <hr />
                <h4>{title[3]}</h4>
                <hr />
                {session.nervStatus.pupil && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Зрачки:</h6>
                            <div className="text-session">
                                {session.nervStatus.pupil}
                            </div>
                        </div>
                    </div>
                )}
                {session.nervStatus.photoReaction && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Фотореакция:</h6>
                            <div className="text-session">
                                {session.nervStatus.photoReaction}
                            </div>
                        </div>
                    </div>
                )}
                {session.nervStatus.meningit && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Менингиальные знаки:</h6>
                            <div className="text-session">
                                {session.nervStatus.meningit}
                            </div>
                        </div>
                    </div>
                )}
                {session.nervStatus.coordinate && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Координационные пробы:</h6>
                            <div className="text-session">
                                {session.nervStatus.coordinate}
                            </div>
                        </div>
                    </div>
                )}
                {session.nervStatus.romberg && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Положение в позе Ромберга:</h6>
                            <div className="text-session">
                                {session.nervStatus.romberg}
                            </div>
                        </div>
                    </div>
                )}
                {session.nervStatus.convulsions && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Судороги:</h6>
                            <div className="text-session">
                                {session.nervStatus.convulsions}
                            </div>
                        </div>
                    </div>
                )}
                {session.nervStatus.dysarthria && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Судороги:</h6>
                            <div className="text-session">
                                {session.nervStatus.dysarthria}
                            </div>
                        </div>
                    </div>
                )}
                <hr />
                <h4>{title[4]}</h4>
                <hr />
                {session.psychStatus.look && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Внешний вид:</h6>
                            <div className="text-session">
                                {session.psychStatus.look}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.breathSmell && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Запах алкоголя:</h6>
                            <div className="text-session">
                                {session.psychStatus.breathSmell}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.behave && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Поведение:</h6>
                            <div className="text-session">
                                {session.psychStatus.behave}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.consciousness && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Сознание:</h6>
                            <div className="text-session">
                                {session.psychStatus.consciousness}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.orientation && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Ориентация в пространстве:</h6>
                            <div className="text-session">
                                {session.psychStatus.orientation}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.perception && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Расстройства восприятия:</h6>
                            <div className="text-session">
                                {session.psychStatus.perception}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.emotion && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Эмоциональный фон:</h6>
                            <div className="text-session">
                                {session.psychStatus.emotion}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.sleep && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Ночной сон:</h6>
                            <div className="text-session">
                                {session.psychStatus.sleep}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.suicide && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Попытка суицида:</h6>
                            <div className="text-session">
                                {session.psychStatus.suicide}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.motive && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Мотив употребления алкоголя:</h6>
                            <div className="text-session">
                                {session.psychStatus.motive}
                            </div>
                        </div>
                    </div>
                )}
                {session.psychStatus.goalMed && (
                    <div className="row">
                        <div className="col session-wrap">
                            <h6>Цель госпитализации:</h6>
                            <div className="text-session">
                                {session.psychStatus.goalMed}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SessionCart;
