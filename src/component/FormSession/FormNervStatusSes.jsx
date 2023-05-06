import React from 'react'

const FormNervStatus = ({nervStatus, setNervStatus}) => {
  return (
    <>
        <div className="row">
            <div className="mb-3 col">
                <label className="form-label">Зрачки</label>
                <select 
                className="form-select" 
                aria-label="Default select example"
                value={nervStatus.pupil}
                onChange={(e)=>setNervStatus({...nervStatus, pupil: e.target.value})}
                >
                    <option defaultValue>Выберите вариант</option>
                    <option value="Нистагм">Нистагм</option>
                    <option value="Мидриаз">Мидриаз</option>
                    <option value="Миоз">Миоз</option>
                    <option value="Анизокория">Анизокория</option>
                </select>
            </div>
            <div className="mb-3 col">
                <label className="form-label">Фотореакция</label>
                <input 
                type="text" 
                className="form-control"
                value={nervStatus.photoReaction}
                onChange={(e)=>setNervStatus({...nervStatus, photoReaction: e.target.value})}
                />
            </div>
        </div>
        <div className="row">
            <div className="mb-3 col">
                <label className="form-label">Менингиальные знаки</label>
                <select 
                className="form-select"
                aria-label="Default select example"
                value={nervStatus.meningit}
                onChange={(e)=>setNervStatus({...nervStatus, meningit: e.target.value})}
                >
                    <option defaultValue>Выберите вариант</option>
                    <option value="Ригидность затылочных мышц">Ригидность затылочных мышц</option>
                    <option value="Симптом Кернига">Симптом Кернига</option>
                    <option value="Брудзинского">Брудзинского</option>
                </select>
            </div>
        </div>
        <div className="row">
            <div className="mb-3 col">
                <label className="form-label">Координационные пробы</label>
                <input 
                type="text" 
                className="form-control"
                value={nervStatus.coordinate}
                onChange={(e)=>setNervStatus({...nervStatus, coordinate: e.target.value})}
                />
            </div>
            <div className="mb-3 col">
                <label className="form-label">Положение в позе Ромберга</label>
                <input 
                type="text" 
                className="form-control"
                value={nervStatus.romberg}
                onChange={(e)=>setNervStatus({...nervStatus, romberg: e.target.value})}
                />
            </div>
        </div>
        <div className="row">
            <div className="mb-3 col">
                <label className="form-label">Судороги</label>
                <textarea 
                className="form-control" 
                rows="1"
                value={nervStatus.convulsions}
                onChange={(e)=>setNervStatus({...nervStatus, convulsions: e.target.value})}
                ></textarea>
            </div>
        </div>
        <div className="row">
            <div className="mb-3 col">
                <label className="form-label">Дизартрия</label>
                <textarea 
                className="form-control"
                rows="1"
                value={nervStatus.dysarthria}
                onChange={(e)=>setNervStatus({...nervStatus, dysarthria: e.target.value})}
                ></textarea>
            </div>
        </div>
    </>
  )
}

export default FormNervStatus