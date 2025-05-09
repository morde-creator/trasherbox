from rest_framework import serializers
from .models import Venta, DetalleVenta

class DetalleVentaSerializer(serializers.ModelSerializer):
    producto_nombre = serializers.StringRelatedField(source='producto', read_only=True)

    class Meta:
        model = DetalleVenta
        fields = ['id', 'producto', 'producto_nombre', 'cantidad', 'precio_unitario', 'subtotal']

class VentaSerializer(serializers.ModelSerializer):
    cliente_nombre = serializers.StringRelatedField(source='cliente', read_only=True)
    detalles = DetalleVentaSerializer(many=True)

    class Meta:
        model = Venta
        fields = ['id', 'cliente', 'cliente_nombre', 'fecha', 'total', 'estado', 'detalles']

    def create(self, validated_data):
        detalles_data = validated_data.pop('detalles')
        venta = Venta.objects.create(**validated_data)
        for detalle in detalles_data:
            DetalleVenta.objects.create(venta=venta, **detalle)
        return venta
