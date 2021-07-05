from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Brand
from base.serializers.brand_serializers import BrandSerializer

from rest_framework import status
