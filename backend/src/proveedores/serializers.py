from rest_framework import serializers
from .models import Proveedor, OrdenCompra, DetalleOrden

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = '__all__'

class DetalleOrdenSerializer(serializers.ModelSerializer):
    producto_nombre = serializers.StringRelatedField(source='producto', read_only=True)

    class Meta:
        model = DetalleOrden
        fields = ['id', 'producto', 'producto_nombre', 'cantidad', 'precio_unitario', 'subtotal']

class OrdenCompraSerializer(serializers.ModelSerializer):
    proveedor_nombre = serializers.StringRelatedField(source='proveedor', read_only=True)
    detalles = DetalleOrdenSerializer(many=True)

    class Meta:
        model = OrdenCompra
        fields = ['id', 'proveedor', 'proveedor_nombre', 'fecha', 'estado', 'detalles']

    def create(self, validated_data):
        detalles_data = validated_data.pop('detalles')
        orden = OrdenCompra.objects.create(**validated_data)
        for detalle in detalles_data:
            DetalleOrden.objects.create(orden=orden, **detalle)
        return orden
