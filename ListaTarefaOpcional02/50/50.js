
const hoteis = [];
const reservas = [];

// Adicionar hotel
// Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
function addHotel(id, nome, cidade, quartosTotais, quartosDisponiveis) {
  const hotel = {
    id,
    nome,
    cidade,
    quartosTotais,
    // quartosDisponiveis: quartosTotais,
    quartosDisponiveis,
    avaliacao: []

  };
  hoteis.push(hotel);
  console.log(`O Hotel "${nome}" foi adicionado com sucesso!`);
}

addHotel(1, "Hotel 1", "Rio de Janeiro", 10, 3);
addHotel(2, "Hotel 2", "Gramado", 50, 5);
addHotel(3, "Hotel 3", "Curitiba", 20, 1);

// --------------------------------------------------------------------------------------------------
// Buscar hotéis por cidade
// Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
function buscarHoteisPorCidade(cidade) {
  const encontrados = hoteis.filter(h => h.cidade.toLowerCase() === cidade.toLowerCase());
  console.log('');
  console.log(" Buscando hotéis . . . ");
  if (encontrados.length === 0) {
    console.log(`Nenhum hotel encontrado em "${cidade}".`);
  } else {
    console.log(`Hotéis disponíveis em ${cidade}:`);
    encontrados.forEach(h => {
      console.log(`-> ${h.nome} (ID: ${h.id}) | Quartos disponíveis: ${h.quartosDisponiveis}`);
    });
  }
}

buscarHoteisPorCidade("Gramado");

// --------------------------------------------------------------------------------------------------
// Fazer reserva
// Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
function fazerReserva(idReserva, idHotel, nomeCliente) {
  const hotel = hoteis.find(h => h.id === idHotel);
  console.log(' ');
  console.log(' Fazendo reserva . . .');
  
  if (!hotel) {
    console.log("Hotel não encontrado!");
    return;
  }
  
  if (hotel.quartosDisponiveis > 0) {
    hotel.quartosDisponiveis--;
    reservas.push({ idReserva, idHotel, nomeCliente });
    console.log(`Quato reservado para -> ${nomeCliente} no hotel -> "${hotel.nome}".`);
  } else {
    console.log(`O hotel "${hotel.nome}" não está com reservas disponivéis.`);
  }
}

fazerReserva(1001, 2, "Patricia");
fazerReserva(1002, 2, "Adriana");
fazerReserva(1003, 1, 'Ale')

// --------------------------------------------------------------------------------------------------
// Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
// Cancelar reserva
function cancelarReserva(idReserva) {
  const index = reservas.findIndex(r => r.idReserva === idReserva);
  console.log('');
  console.log(' Cancelando a reserva . . . ');
  
  if (index === -1) {
    console.log("Reserva não encontrada!");
    return;
  }
  const reserva = reservas[index];
  const hotel = hoteis.find(h => h.id === reserva.idHotel);
  
  if (hotel) {
    hotel.quartosDisponiveis++;
  }
  
  reservas.splice(index, 1);
  console.log(`A reserva ${idReserva} foi cancelada!`);
}


cancelarReserva(1001);

// --------------------------------------------------------------------------------------------------
// Listar todas as reservas
// Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
function listarReservas() {
  console.log('');
  console.log('Listando as reservas . . .');
  
  if (reservas.length === 0) {
    console.log("Nenhuma reserva.");
    return;
  }
  
  console.log("Lista de Reservas:");
  reservas.forEach(r => {
    const hotel = hoteis.find(h => h.id === r.idHotel);
    console.log(
      `- Reserva ${r.idReserva}: ${r.nomeCliente} no hotel "${hotel.nome}" (${hotel.cidade})`
    );
  });
}

listarReservas();

// ###################################################################################################
console.log('');
console.log('------------------Desafios adicionais----------------------------');

// --------------------------------------------------------------------------------------------------
// Check-in
// Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
function checkIn(idReserva) {
  
  const reserva = reservas.find(r => r.idReserva === idReserva);
  if (!reserva) {
    console.log("Essa reserva não existe!");
    return;
  }
  console.log(`Check-in realizado para ${reserva.nomeCliente}.`);
}

checkIn(1002);
//checkIn(1001)
//checkIn(1003)

// Check-out e Avaliação
function checkOut(idReserva, avaliacao) {
  const reserva = reservas.find(r => r.idReserva === idReserva);
  console.log('');
  console.log(`Realizando o Checkout . . .`);
  
  if (!reserva) {
    console.log(`Essa reserva ${reserva} não existe!`);
    return;
  }

  const hotel = hoteis.find(h => h.id === reserva.idHotel);
  if (hotel) {
    hotel.quartosDisponiveis++;
    hotel.avaliacao.push(avaliacao)
  }

  const indice = reservas.findIndex(r => r.idReserva === idReserva);
  reservas.splice(indice, 1);
  console.log(`Reserva ${idReserva} foi removida`);
  
}

checkOut(1003, 5);

// Gerar relatórios de ocupação para um hotel.
function relatorioOcupacao(idHotel) {
  console.log('');
  console.log('Carregando o Relatório de ocupação . . .');
  
  
  const hotel = hoteis.find(h => h.id === idHotel);
  if (!hotel) {
    console.log(`Não foi possivél encontrar esse Hotel -> ${hotel}`);
    return;
  }

  const ocupados = hotel.quartosTotais - hotel.quartosDisponiveis;
  const taxa = ((ocupados / hotel.quartosTotais) * 100).toFixed(2);

  console.log(`O Relatório de ocupação para "${hotel.nome}":`);
  console.log(`Quartos ocupados: ${ocupados}/${hotel.quartosTotais} (${taxa}%)`);

}

relatorioOcupacao(1);
relatorioOcupacao(2);
relatorioOcupacao(3);

