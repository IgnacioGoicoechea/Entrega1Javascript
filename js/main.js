function consultarPrecio (){
    const seleccionarPlan = document.getElementById('planes');
    const seleccionarValor = seleccionarPlan.value;

    const planSeleccionado = planes.find((plan) => plan.nombre === seleccionarValor);
        if (planSeleccionado) {
            const precio = planSeleccionado.valor;
            const valorPlan = document.getElementById('valor');
            valorPlan.textContent = `valor: $${precio}`;

            const descripcion = planSeleccionado.descripcion;
            const descripcionPlan = document.getElementById('descripcion');
            descripcionPlan.textContent = `Descipcion: ${descripcion}`;

            const planJson = JSON.stringify(planSeleccionado);
            localStorage.setItem('planSelecionado', planJson);
        }else{
            const valorPlan = document.getElementById('valor');
            valorPlan.textContent = 'NO PAIN - NO GAIN'

            const descripcionPlan = document.getElementById('descripcion');
            descripcionPlan.textContent = 'METETE AL GYM'
        }

}






function datosenLSG (){
    const planJson = localStorage.getItem('planSeleccionado');
    if (planJson){
        const planSeleccionado = JSON.parse(planJson);
        const valorPlan = document.getElementById('valor');
        valorPlan.textContent = `valor: $${planSeleccionado.valor}`;

        const descipcion = planSeleccionado.descipcion;
        const descripcionPlan = document.getElementById('descripcion');
        descripcionPlan.textContent = 'Descripcion: ${descipcion}'
    } else{
        const valorPlan = document.getElementById('valor');
        valorPlan.textContent = "NO PAIN - NO GAIN"

        const descripcionPlan = document.getElementById('descripcion');
        descripcionPlan.textContent = 'NO GAIN'
    }
}


document.getElementById('consultar').addEventListener('click', consultarPrecio);
window.addEventListener('cargar', datosenLSG);