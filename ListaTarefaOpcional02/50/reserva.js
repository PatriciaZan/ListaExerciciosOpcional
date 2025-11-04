
const reservas = [];

function reserva(idReserva, idHotel, nomeCliente) {
  const hotel = hoteis.find(h => h.id === idHotel);

  if (!hotel) {
    console.log("❌ Hotel não encontrado!");
    return;
  }

  if (hotel.quartosDisponiveis > 0) {
    hotel.quartosDisponiveis--;
    reservas.push({ idReserva, idHotel, nomeCliente });
    console.log(`✅ Reserva feita com sucesso para ${nomeCliente} no hotel "${hotel.nome}".`);
  } else {
    console.log(`❌ O hotel "${hotel.nome}" está sem quartos disponíveis.`);
  }
}