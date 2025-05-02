from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()

    def actualizar_stock(self, cantidad):
        self.stock -= cantidad
        self.save()

    def __str__(self):
        return self.nombre
