export const fetchLeasings = () => (
	$.ajax({
		method: 'GET',
		url: `api/leasings`
	})
);

export const createLeasing = leasing => (
	$.ajax({
		method: 'POST',
		url: `api/leasings`,
		data: {leasing}
	})
);

export const updateLeasing = leasing => (
	$.ajax({
		method: 'PATCH',
		url: `api/leasings/${leasing.id}`,
		data: {leasing}
	})
);

export const deleteLeasing = id => (
	$.ajax({
		method: 'DELETE',
		url: `api/leasings/${id}`
	})
);
