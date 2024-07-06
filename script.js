document.addEventListener('DOMContentLoaded', () => {
    const calcularBtn = document.getElementById('calcularBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');

    calcularBtn.addEventListener('click', () => {
        const rutaSelect = document.getElementById('ruta');
        const servicioSelect = document.getElementById('servicio');
        const cantidadInput = document.getElementById('cantidad');
        const precioInput = document.getElementById('precio');
        const totalUSInput = document.getElementById('total-us');

        const tarifas = {
            'Lima - Mala': 20.00,
            'Lima – Cañete': 25.00,
            'Lima - Chincha': 30.00,
            'Lima – Pisco': 40.00
        };

        const variaciones = {
            'Económico': 0,
            'Ejecutivo': 0.10,
            'Presidencial': 0.15
        };

        const actualizarPrecio = () => {
            const ruta = rutaSelect.value;
            const servicio = servicioSelect.value;
            const cantidad = parseInt(cantidadInput.value) || 0;

            if (ruta && servicio) {
                let precio = tarifas[ruta];
                precio += precio * variaciones[servicio];
                if (cantidad > 3) {
                    precio *= (cantidad - 1);
                } else {
                    precio *= cantidad;
                }
                precioInput.value = precio.toFixed(2);
                actualizarTotalUS(precio);
            } else {
                precioInput.value = '';
                totalUSInput.value = '';
            }
        };

        const actualizarTotalUS = (precio) => {
            const totalUS = (precio / 3.5).toFixed(2);
            totalUSInput.value = totalUS;
            totalUSInput.style.color = 'green';
        };

        actualizarPrecio();
    });

    limpiarBtn.addEventListener('click', () => {
        document.querySelector('form').reset();
        document.getElementById('precio').value = '';
        document.getElementById('total-us').value = '';
    });
});
