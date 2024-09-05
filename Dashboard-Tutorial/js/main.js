let datosConsulta = null; // Variable para almacenar los datos de la consulta

function consultar() {
    const fechaConsulta = document.getElementById('fechaConsulta').value;

    fetch(`Conection.php?fecha=${fechaConsulta}`)
        .then(response => response.json())
        .then(data => {
            datosConsulta = data; // Guardar los datos de la consulta en la variable
            actualizarGraficas(); // Llamar a la función para cargar los datos en las gráficas
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

function actualizarGraficas() {
    if (datosConsulta) {
        // Obtener los datos específicos de la consulta
        const labels = datosConsulta.map(item => item.fecha.split(' ')[1]);
        const values = datosConsulta.map(item => item.FT_PT501_1);
        console.log(values);
        const values5=datosConsulta.map(item=> item.BE);
        const values6=datosConsulta.map(item=>item.PT_622_2)


        const values2 = datosConsulta.map(item => item.PT_616A1_2);
        const values3 = datosConsulta.map(item => item.PT_616A2_2);
        const values4 = datosConsulta.map(item => item.PT_616A3_2);


        // Obtener otros datos según sea necesario

        // Crear nuevas instancias de gráficas con los datos actualizados
        const chart1 = echarts.init(document.getElementById("chart1"));
        chart1.setOption(getOptionChart(labels, values));

        const chart2 = echarts.init(document.getElementById("chart2"));
        chart2.setOption(getOptionChart(labels, values2));

        const chart3 = echarts.init(document.getElementById("chart3"));
        chart3.setOption(getOptionChart(labels, values3));

        const chart4 = echarts.init(document.getElementById("chart4"));
        chart4.setOption(getOptionChart(labels, values4));

        const chart5 = echarts.init(document.getElementById("chart5"));
        chart5.setOption(getOptionChart(labels, values5));

        const chart6 = echarts.init(document.getElementById("chart6"));
        chart6.setOption(getOptionChart(labels, values6));
        // Configurar otras gráficas según sea necesario
    }
}

// Función para obtener la configuración de la gráfica de ECharts
function getOptionChart(labels, values) {
    return {
        tooltip: {
            show: true,
            trigger: "axis",
        },
        dataZoom: {
            show: true,
        },
        xAxis: {
            type: 'category',
            data: labels,
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: values,
            type: 'line'
        }]
    };
}

function Siguiente_1() {
    const fechaConsulta = document.getElementById('fechaConsulta').value;
    console.log(fechaConsulta);
    console.log('Se esta ejecuntando esto');
    const fechaSiguiente = new Date(fechaConsulta);
    fechaSiguiente.setDate(fechaSiguiente.getDate() + 1); // Incrementar la fecha en 1 día

    const fechaSiguienteFormato = fechaSiguiente.toISOString().split('T')[0];
    document.getElementById('fechaConsulta').value = fechaSiguienteFormato;
    consultar();
}

function Anterior_2() {
    const fechaConsulta = document.getElementById('fechaConsulta').value;
    console.log(fechaConsulta);
    console.log('Se esta ejecutando esto');
    const fechaAnterior = new Date(fechaConsulta);
    fechaAnterior.setDate(fechaAnterior.getDate() - 1); // Decrementar la fecha en 1 día
    console.log(fechaAnterior);
    const fechaAnteriorFormato = fechaAnterior.toISOString().split('T')[0];
    document.getElementById('fechaConsulta').value = fechaAnteriorFormato;
    consultar();
}

///------------------------------------------------------------------------------------------------------------------------------------------










 
 
 
 
 /*const getOptionChart1 = (chartData) => {
    return {
        tooltip: {
            show: true,
            trigger: "axis",
        },
        dataZoom: {
            show: true,
        },
        xAxis: {
            type: 'category',
            data: chartData.categories,
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: chartData.seriesData,
            type: 'line'
        }]
    };
};

// Define las opciones para todas las gráficas excepto la primera
const getOptionCharts = (chartData) => {
    return {
        tooltip: {
            show: true,
            trigger: "axis",
        },
        dataZoom: {
            show: true,
        },
        xAxis: {
            type: 'category',
            data: chartData.categories,
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: chartData.seriesData,
            type: 'line'
        }]
    };
};

// Datos para las gráficas
const chartData1 = {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    seriesData: [150, 230, 224, 218, 135, 147, 260]
};

const chartData2 = {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    seriesData: [130, 210, 194, 198, 115, 127, 240]
};

// Inicializa todas las gráficas
const initCharts = () => {
    const chart1 = echarts.init(document.getElementById("chart1"));
    const chart2 = echarts.init(document.getElementById("chart2"));
    const chart3 = echarts.init(document.getElementById("chart3"));
    const chart4 = echarts.init(document.getElementById("chart4"));
    const chart5 = echarts.init(document.getElementById("chart5"));
    const chart6 = echarts.init(document.getElementById("chart6"));

    chart1.setOption(getOptionChart1(chartData1));
    chart2.setOption(getOptionCharts(chartData2));
    chart3.setOption(getOptionCharts(chartData2));
    chart4.setOption(getOptionCharts(chartData2));
    chart5.setOption(getOptionCharts(chartData2));
    chart6.setOption(getOptionCharts(chartData2));
};

window.addEventListener('load', () => {
    initCharts();
});*/
