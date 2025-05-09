from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Proveedor, OrdenCompra
from .serializers import ProveedorSerializer, OrdenCompraSerializer

class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer
    permission_classes = [IsAuthenticated]

class OrdenCompraViewSet(viewsets.ModelViewSet):
    queryset = OrdenCompra.objects.all().order_by('-fecha')
    serializer_class = OrdenCompraSerializer
    permission_classes = [IsAuthenticated]
