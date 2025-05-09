from django.db import models
from productos.models import Producto

class Proveedor(models.Model):
    nombre = models.CharField(max_length=100)
    rut = models.CharField(max_length=12, unique=True)
    direccion = models.CharField(max_length=200, blank=True)
    telefono = models.CharField(max_length=15, blank=True)
    email = models.EmailField(blank=True)

    def __str__(self):
        return self.nombre

class OrdenCompra(models.Model):
    proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE)
    fecha = models.DateField(auto_now_add=True)
    estado = models.CharField(max_length=20, choices=[
        ('pendiente', 'Pendiente'),
        ('recibida', 'Recibida'),
        ('cancelada', 'Cancelada'),
    ], default='pendiente')

    def __str__(self):
        return f"OC {self.id} - {self.proveedor.nombre}"

class DetalleOrden(models.Model):
    orden = models.ForeignKey(OrdenCompra, related_name='detalles', on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)

    def subtotal(self):
        return self.cantidad * self.precio_unitario
