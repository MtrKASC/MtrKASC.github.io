<?php
header('Content-Type: application/json');
$server_name = "10.0.1.145"; // Puede ser una dirección IP o un nombre de servidor
$database = "floocontrol";
$uid = "ksalgado";
$pass = "phpUsuariol3ct7ra.2024";

// Crear conexión
$conn = new mysqli($server_name, $uid, $pass, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if(isset($_GET['fecha'])){
    $fechaConsulta = $_GET['fecha'];
    $sql = "SELECT Fecha, FT_PT501_1, PT_616A1_2, PT_616A2_2, PT_616A3_2, BE, PT_622_2 FROM PLANTA_R4_min WHERE DATE(Fecha) = '$fechaConsulta' ORDER BY Fecha ASC";
}else{
    // Obtener la fecha actual
    $sql = "SELECT Fecha, FT_PT501_1, PT_616A1_2, PT_616A2_2, PT_616A3_2, BE, PT_622_2 FROM PLANTA_R4_min WHERE DATE(Fecha) = CURDATE() ORDER BY Fecha ASC";
}

$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $fecha = $row['Fecha'];
        $flujo = $row['FT_PT501_1'];
        $PT_616A1_2 = $row['PT_616A1_2'];
        $PT_616A2_2 = $row['PT_616A2_2'];
        $PT_616A3_2 = $row['PT_616A3_2'];
        $BE = $row['BE'];
        $PT_622_2 = $row['PT_622_2'];

        $data[] = array(
            'fecha' => $fecha,
            'FT_PT501_1' => $flujo,
            'PT_616A1_2' => $PT_616A1_2,
            'PT_616A2_2' => $PT_616A2_2,
            'PT_616A3_2' => $PT_616A3_2,
            'BE' => $BE,
            'PT_622_2' => $PT_622_2
        );
    }
} else {
    echo '0 resultados';
}

echo json_encode($data); // Devolver los datos como JSON

$conn->close();
?>
