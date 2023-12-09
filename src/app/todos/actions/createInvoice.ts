'use server'; 
export async function createInvoice(formData: FormData) {
    const rawFormData = {
      amount: formData.get('amount'),
      status: formData.get('status'),
    };
    setTimeout(() => {
        console.log(rawFormData);
    }, 3000)
 
}